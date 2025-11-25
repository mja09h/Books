import { Request, Response, NextFunction } from "express";
import category from "../../models/chategories";

const getCategories = async (req: Request, res: Response, next: NextFunction) => {
    try { 
        const categories = await category.find();
        res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
};

const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const categoryItem = await category.findById(id);
        if (!categoryItem) {
            res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(categoryItem);
    } catch (error) {
        next(error);
    }
};

const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body;
        const newCategory = await category.create({ name });
        res.status(201).json(newCategory);
    } catch (error) {
        next(error);
    }
};

const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedCategory = await category.findByIdAndUpdate(id, { name }, { new: true });
        if (!updatedCategory) {
            res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(updatedCategory);
    } catch (error) {
        next(error);
    }
};

const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const deletedCategory = await category.findByIdAndDelete(id);
        if (!deletedCategory) {
            res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        next(error);
    }
};



export { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory };
