import express from "express";
const router = express.Router();


import {createMemory, getMemories} from "../controllers/memory.js";

router.post("/", createMemory);
router.get("/", getMemories);


export default router;

