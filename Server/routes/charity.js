import express from "express";
import {
  getCharity,
} from "../config/charity.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
   
/* READ */
router.get("/:id", verifyToken, getCharity);

export default router;