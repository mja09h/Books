import express from "express";
import { createCategory, deleteCategory, getCategoryById, getCategories, updateCategory } from "./categories.controller";

const routerCategory = express.Router();

routerCategory.get("/", getCategories);
routerCategory.get("/:id", getCategoryById);
routerCategory.post("/", createCategory);
routerCategory.put("/:id", updateCategory);
routerCategory.delete("/:id", deleteCategory);

export default routerCategory