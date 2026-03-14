import { Request, Response } from "express";
import { grammarService } from "../services/grammarService";

export const grammarController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const grammars = await grammarService.getGrammars();
      res.json(grammars);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ error: message });
    }
  },
};
