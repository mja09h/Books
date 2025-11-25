import express from "express";
import { createBook, deleteBook, getBookById, getBooks, updateBook } from "./book.controller";

const routerBook = express.Router();

routerBook.get("/", getBooks);
routerBook.get("/:id", getBookById);
routerBook.post("/", createBook);
routerBook.put("/:id", updateBook);
routerBook.delete("/:id", deleteBook);  

export default routerBook;
