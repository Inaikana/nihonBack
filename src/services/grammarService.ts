import { supabase } from "../config/supabase";
import { GrammarRule } from "../types/GrammarRule";

export const grammarService = {
  async getGrammars(): Promise<GrammarRule[]> {
    const { data, error } = await supabase.from("grammars").select("*");

    if (error) {
      throw new Error(`DB錯誤: ${error.message}`);
    }

    return data as GrammarRule[];
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
