import { Request, Response } from "express";
import { grammarService } from "../services/grammarService";

export const grammarController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const grammars = await grammarService.getGrammars();
      res.json(grammars);
    } catch (error: unknown) {
      console.error("❌ 後端發生錯誤了：", error);
      const message = error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: message });
    }
  },
};
