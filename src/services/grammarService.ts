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

// 把所有跟文法相關的API函數都裝進 grammarService 這個物件 這樣之後方便管理
