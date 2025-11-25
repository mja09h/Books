import express from "express";
import { createAuthor, deleteAuthor, getAuthorById, getAuthors, updateAuthor } from "./authors.controller";

const routerAuthor = express.Router();

routerAuthor.get("/", getAuthors);
routerAuthor.get("/:id", getAuthorById);
routerAuthor.post("/", createAuthor);
routerAuthor.put("/:id", updateAuthor);
routerAuthor.delete("/:id", deleteAuthor);

export default routerAuthor;