import { Book } from "./data/library.data";
import { LibraryPresentation } from "./presentation/library.presentation";

const libraryPresentation = new LibraryPresentation();
libraryPresentation
  .getAllBooksAvailable()
  .then((books: Book[]) => console.log(books));

libraryPresentation.getBookById(155).then((book: Book | undefined) => {
  if (book) {
    console.log(book);
  } else {
    console.log("Book not found");
  }
});
