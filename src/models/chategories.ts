import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],
}, { timestamps: true });

const category = mongoose.model("category", categorySchema);

export default category;