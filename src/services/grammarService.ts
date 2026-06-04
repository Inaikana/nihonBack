import { supabase } from "../config/supabase";
import {
  GrammarRule,
  GetGrammarsParams,
  GetGrammarsResponse,
} from "../types/GrammarRule";

export const grammarService = {
  async getGrammars({
    keyword,
    tag,
    page,
    limit,
  }: GetGrammarsParams): Promise<GetGrammarsResponse> {
    // 1. 計算 Supabase range 區間
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    // 2. 初始化查詢，加上 { count: 'exact' } 才能拿總筆數
    let query = supabase
      .from("grammars") // 填入你的 Supabase 資料表名稱
      .select("*", { count: "exact" });

    // 3. 條件篩選：模糊搜尋關鍵字
    if (keyword) {
      query = query.or(
        `grammar_pattern.ilike.%${keyword}%,chinese_meaning.ilike.%${keyword}%,video_title.ilike.%${keyword}%`,
      );
    }

    // 4. 條件篩選：標籤陣列包含特定標籤
    if (tag) {
      query = query.contains("tags", [tag]);
    }

    // 5. 分頁與排序
    const { data, error, count } = await query
      .order("jid", { ascending: true }) // 依據你的自製 id 排序
      .range(from, to);

    if (error) {
      throw new Error(error.message);
    }

    // 6.
    return {
      success: true,
      data: data || [],

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
