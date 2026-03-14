export interface ExampleRule {
  japanese: string;
  chinese: string;
}

export interface QuizRule {
  question: string;
  options: string[];
  answer: string;
}

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
  quizs: QuizRule[];
}
