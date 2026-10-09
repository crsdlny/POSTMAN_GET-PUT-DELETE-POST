import express from "express";
import CategoryController from "./controllers/CategoryController.js";

const router = express.Router();

router.get("/categories", CategoryController.index);
router.get("/categories/create", CategoryController.create);
router.post("/categories", CategoryController.store);

export default router;