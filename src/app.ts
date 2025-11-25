import express from "express";
import dotenv from "dotenv";
import connectDB from "./database";
import bookRoutes from "./apis/Books/book.routes";
import authorRoutes from "./apis/Authors/authors.routes";
import categoryRoutes from "./apis/Categories/categories.routes";
import { errorHandler } from "./middlewares/ErrorHandler";
import { notFound } from "./middlewares/notFound";
import upload from "./middlewares/multer";

dotenv.config();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const app = express();
connectDB();

app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/categories", categoryRoutes);

app.use(upload.single("image"));

app.use(express.static("uploads"));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});


export default app;