import Book from "../model/bookModel.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({ success: true, Books: books });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ success: false, message: error });
  }
};
