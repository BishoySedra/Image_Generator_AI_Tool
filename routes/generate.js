import { Router } from "express";
import * as generateControllers from "../controllers/generate.js";

const router = Router();

router.post('/generate', generateControllers.generateImage);

export default router;
