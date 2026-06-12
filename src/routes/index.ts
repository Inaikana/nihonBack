import { Router } from "express";
import { grammarController } from "../controllers/grammarController";

const router = Router();
router.get("/grammars", grammarController.getAll);
router.get("/grammar/:jid", grammarController.getByJid); // 用 jid 來查詢單一筆文法資料的API函數 但暫時未使用
export default router;
