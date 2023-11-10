const Book = require("./model");

// Create a document / entry in our database
const addBook = async (req, res) => {
    const newBook = await Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        published: req.body.published,
        publisher: req.body.publisher,
        description: req.body.description,
        price: req.body.price
    });

    const successResponse = {
        message: "Success - book has been added",
        newBook: newBook
    };

    res.status(201).json(successResponse);
}

// Gets books from the collection
const getBooks = async (req, res) => {
    const getAllBooks = await Book.find({}); // get all books from our collection
    const successResponse = {
        message: "Success - all books found",
        books: getAllBooks // Changed "book" to "books" to represent an array of books
    }
    res.status(200).json(successResponse);
}

// Route to update any of the fields - simply change the title and field parameters in the PUT request
const updateBook = async (req, res) => {
    const title = req.params.title;
    const field = req.params.field; // Get the field to update from the route params
    const updateData = { [field]: req.body[field] }; // Use dynamic field name

    try {
        const updatedBook = await Book.findOneAndUpdate({ title }, updateData, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Success - book has been updated", updatedBook });
    } catch (error) {
        res.status(500).json({ message: "Error updating the book", error });
    }
};


// Route to delete a book on the database
const deleteBook = async (req, res) => {
    const title = req.params.title;

    try {
        const deletedBook = await Book.findOneAndDelete({ title });
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Success - book has been deleted", deletedBook });
    } catch (error) {
        res.status(500).json({ message: "Error deleting the book", error });
    }
}

// Delete ALL books on the database
const deleteAllBooks = async (req, res) => {
    try {
        const result = await Book.deleteMany({});

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "No books found to delete." });
        }

        res.status(200).json({ message: "Success - All books have been deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting all books", error });
    }
}

// Create a route to find one book on the database using the title
const findBookByTitle = async (req, res) => {
    const title = req.params.title;

    try {
        const foundBook = await Book.findOne({ title });
        if (!foundBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Success - book found", book: foundBook });
    } catch (error) {
        res.status(500).json({ message: "Error finding the book", error });
    }
}

// Create a route to add 2 books at once on the database
const addBooks = async (req, res) => {
    const books = req.body;

    try {
        const newBooks = await Book.create(books);
        res.status(201).json({ message: "Success - books have been added", newBooks });
    } catch (error) {
        res.status(500).json({ message: "Error adding books", error });
    }
}

// Create a route to dynamically update any field on the database
const updateBookByTitle = async (req, res) => {
    const title = req.params.title;
    const updateData = req.body;

    try {
        const updatedBook = await Book.findOneAndUpdate({ title }, updateData, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Success - book has been updated", updatedBook });
    } catch (error) {
        res.status(500).json({ message: "Error updating the book", error });
    }
}

module.exports = {
    addBook,
    getBooks,
    updateBook,
    deleteBook,
    deleteAllBooks, 
    findBookByTitle,
    addBooks,
    updateBookByTitle,
};
