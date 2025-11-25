import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],
}, { timestamps: true });

const author = mongoose.model("author", authorSchema);

export default author;