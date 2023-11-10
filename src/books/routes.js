const { Router } = require("express");

const bookRouter = Router();

const { addBook, getBooks, updateBook, deleteBook, deleteAllBooks, findBookByTitle, addBooks, updateBookByTitle } = require("./controllers");

bookRouter.post("/addBook", addBook);
bookRouter.get("/getBooks", getBooks);
bookRouter.put("/updateBook/:title", updateBook);
bookRouter.delete("/deleteBook/:title", deleteBook);
bookRouter.delete("/deleteAllBooks", deleteAllBooks); 
bookRouter.get("/findBookByTitle/:title", findBookByTitle);
bookRouter.post("/addBooks", addBooks);
bookRouter.put("/updateBookByTitle/:title", updateBookByTitle);

module.exports = bookRouter;
