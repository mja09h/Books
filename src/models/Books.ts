import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "author", required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "category", required: true },
}, { timestamps: true });

const book = mongoose.model("book", bookSchema);

export default book;