import { supabase } from "../config/supabase";
import { GetGrammarsParams, GetGrammarsResponse } from "../types/GrammarRule";

export const grammarService = {
  async getGrammars({
    keyword,
    tag,
    episodeNumber,
    page,
    limit,
  }: GetGrammarsParams): Promise<GetGrammarsResponse> {
    // :GetGrammarsParams】是定義前面物件的型別
    // Promise<GetGrammarsResponse>】 是定義這個API函數回傳值的型別

    //   計算這個頁數的資料區間 以一頁20筆為例  page=1 就是從第1筆到第20筆  page=2 就是從第21筆到第40筆
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    //  Supabase語法 : { count: 'exact' }
    //  'exact'  精準地計算符合條件的資料總數
    //  'planned'：估算值。資料庫會用演算法大概猜一個數字
    //  'estimated'：結合前兩者的估算方式
    let query = supabase.from("grammars").select("*", { count: "exact" });
    // query 表示篩選條件 以這行來說 目前還沒任何條件(白紙狀態)

    //  supabase 提供方便的語法 當使用 query = query.or(條件A)  就是在原本的 query 加上條件A的篩選 (如下是加上關鍵字搜尋)
    if (keyword) {
      query = query.or(
        `grammarPattern.ilike.%${keyword}%,` +
          `grammarSummary.ilike.%${keyword}%,` +
          `chineseMeaning.ilike.%${keyword}%,` +
          `chineseSummary.ilike.%${keyword}%`,
      );
    }

    // 在原本的 query 加上對tags的篩選
    if (tag) {
      query = query.contains("tags", [tag]);
    }

    if (episodeNumber) {
      query = query.eq("episodeNumber", episodeNumber); // eq 意思是等於
    }

    // .order("jid", { ascending: true }) 意思是依照jid排序
    // ascending: true 代表升冪   false 就是降冪
    // .range(from, to)：意思是「分頁」 只能拿第 from 筆到第 to 筆的資料

    // query雖然不是API函數 但當它加上await時 就會依照當下篩選條件 自動去 supabase抓取資料
    const { data, error, count } = await query
      .order("jid", { ascending: true }) // 依據你的自製 id 排序
      .range(from, to);

    if (error) {
      throw new Error(error.message);
    }

    // 回傳的資料 包含data和分頁資訊
    return {
      success: true,
      grammarsData: data || [],

      //  pagination 回傳分頁情況給前端
      pagination: {
        totalItems: count || 0, // 總共有幾筆資料
        currentPage: page, // 目前是第幾頁
        totalPages: count ? Math.ceil(count / limit) : 0, // 總共有幾頁
        limit: limit, // 每頁有幾筆
      },
    };
  },
};

/*

1  grammarService物件
把所有跟文法相關的API函數都裝進 grammarService 這個物件 這樣之後方便管理

2  Supabase 的 Query Builder (查詢建構器)
from("grammars")：鎖定你要操作的資料庫表格名稱
select("*")：這就是 SQL 的語法，* 代表「選取所有欄位」

3  為什麼這邊不加 try catch ?
services 資料夾是放 後端跟DB之間的API函數 目的只是「去拿資料」 
如果發生錯誤 直接把錯誤往上丟（Throw）在 controllers 處理
*/
