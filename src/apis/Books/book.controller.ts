import { Request, Response, NextFunction } from "express";
import book from "../../models/Books";
import { networkInterfaces } from "os";


const getBooks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, author, categories } = req.query;
        const query: any = {};

        if (title) {
            query.title = { $regex: title, $options: "i" };
        }

        if (author) {
            query.author = author;
        }

        if (categories) {
            const categoryIds = (categories as string).split(",");
            query.category = { $in: categoryIds };
        }

        const books = await book.find(query).populate("author").populate("category");
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
};

const getBookById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const bookItem = await book.findById(id);
        if (!bookItem) {
            res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(bookItem);
    } catch (error) {
        next(error);
    }
};

const createBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, author, category } = req.body;
        const newBook = await book.create({ title, author, category });
        res.status(201).json(newBook);
    } catch (error) {
        next(error);
    }
};

const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { title, author, category } = req.body;
        const updatedBook = await book.findByIdAndUpdate(id, { title, author, category }, { new: true });

        if (!updatedBook) {
            res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json(updatedBook);

    } catch (error) {
        next(error);
    }
};

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const deletedBook = await book.findByIdAndDelete(id);
        if (!deletedBook) {
            res.status(404).json({ message: "Book not found" });
        } 
        
        res.status(200).json({ message: "Book deleted successfully" });

    } catch (error) {
        next(error);
    }
};


export { getBooks, getBookById, createBook, updateBook, deleteBook };