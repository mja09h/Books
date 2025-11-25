import { Request, Response, NextFunction } from "express";
import author from "../../models/Authors";

const getAuthors = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authors = await author.find();
        res.status(200).json(authors);
    } catch (error) {
        next(error);
    }
};

const getAuthorById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const authorItem = await author.findById(id);

        if (!authorItem) {
            res.status(404).json({ message: "Author not found" });
        }

        res.status(200).json(authorItem);
    } catch (error) {
        next(error);
    }
};

const createAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body;
        const newAuthor = await author.create({ name });
        res.status(201).json(newAuthor);
    } catch (error) {
        next(error);
    }
};

const updateAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedAuthor = await author.findByIdAndUpdate(id, { name }, { new: true });

        if (!updatedAuthor) {
            res.status(404).json({ message: "Author not found" });
        }

        res.status(200).json(updatedAuthor);
    } catch (error) {
        next(error);
    }
};

const deleteAuthor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const deletedAuthor = await author.findByIdAndDelete(id);

        if (!deletedAuthor) {
            res.status(404).json({ message: "Author not found" });
        }

        res.status(200).json({ message: "Author deleted successfully" });
    } catch (error) {
        next(error);
    }
};


export { getAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor };