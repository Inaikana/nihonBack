import { Request, Response } from "express";
import { grammarService } from "../services/grammarService";

export const grammarController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      // 🕵️‍♂️ 檢查點：看看 req.query 到底有沒有抓到東西
      // console.log("=== 收到前端請求 ===");
      // console.log("原始的 req.query:", req.query);

      const keyword = req.query.keyword ? String(req.query.keyword) : undefined;
      const tags = req.query.tags ? String(req.query.tags) : undefined;
      const episodeNumber = req.query.episodeNumber
        ? String(req.query.episodeNumber)
        : undefined;
      const page = req.query.page ? Number(req.query.page) : 1;
      const limit = req.query.limit ? Number(req.query.limit) : 20;

      // 🕵️‍♂️ 檢查點：看看轉換型別後的數字對不對
      // console.log("轉換後的參數:", { keyword, tags, page, limit });

      const grammars = await grammarService.getGrammars({
        keyword,
        tags,
        episodeNumber,
        page,
        limit,
      });
      res.json(grammars);
    } catch (error: unknown) {
      console.error("❌ 後端發生錯誤了：", error);
      const message = error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: message });
    }
  },

  // 用 jid 來查詢單一筆文法資料的API函數 但暫時未使用
  async getByJid(req: Request, res: Response): Promise<void> {
    try {
      const jid = String(req.params.jid);
      const result = await grammarService.getGrammarByJid(jid);
      res.json(result);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: message });
    }
  },
};
