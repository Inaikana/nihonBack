import { Request, Response } from "express";
import { grammarService } from "../services/grammarService";

export const grammarController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      // 🕵️‍♂️ 檢查點：看看 req.query 到底有沒有抓到東西
      // console.log("=== 收到前端請求 ===");
      // console.log("原始的 req.query:", req.query);

      const keyword = req.query.keyword ? String(req.query.keyword) : undefined;
      const tag = req.query.tag ? String(req.query.tag) : undefined;
      const page = req.query.page ? Number(req.query.page) : 1;
      const limit = req.query.limit ? Number(req.query.limit) : 20;

      // 🕵️‍♂️ 檢查點：看看轉換型別後的數字對不對
      // console.log("轉換後的參數:", { keyword, tag, page, limit });

      const grammars = await grammarService.getGrammars({
        keyword,
        tag,
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
};
