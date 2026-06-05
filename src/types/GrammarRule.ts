// 例句
export interface ExampleRule {
  japanese: string;
  chinese: string;
}

// 測驗 (未來製作)
export interface QuizRule {
  question: string;
  options: string[];
  answer: string;
}

// 日文文法
export interface GrammarRule {
  id: number;
  created_at: string;
  jid: string;
  episodeNumber: string;
  order: string;
  timestamp: number;
  grammarPattern: string;
  grammarSummary: string;
  chineseMeaning: string;
  chineseSummary: string;
  notes: string[];
  examples: ExampleRule[];
  referenceUrl: string;
  thumbnail: string;
  videoTitle: string;
  tags: string[];
  quizs: QuizRule[];
}

// 路由參數
export interface GetGrammarsParams {
  keyword?: string;
  tag?: string;
  episodeNumber?: string;
  page: number;
  limit: number;
}

//  API 回傳物件
export interface GetGrammarsResponse {
  success: boolean;
  grammarsData: GrammarRule[];
  pagination: {
    totalItems: number;
    currentPage: number;
    totalPages: number;
    limit: number;
  };
}
