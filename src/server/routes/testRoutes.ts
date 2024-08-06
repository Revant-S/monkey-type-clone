import { Router } from "express";
import { getTest } from "../controllers/testController";

const router = Router();

router.get("/getTest", getTest);
router.post("/submitTest")



export default router
