import express from "express";
import {
  createFile,
  deleteFile,
  getFile,
} from "../controllers/indexController.js";

let router = express.Router();

router.get("/createFile", createFile);
router.get("/getFile", getFile);
router.get("/deleteFile", deleteFile);
export default router;
