import { Router } from "express";
import { grammarController } from "../controllers/grammarController";

const router = Router();
router.get("/", grammarController.getAll);

export default router;
