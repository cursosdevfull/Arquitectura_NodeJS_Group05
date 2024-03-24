import { Book } from "./data/library.data";
import { LibraryPresentation } from "./presentation/library.presentation";

const libraryPresentation = new LibraryPresentation();
libraryPresentation
  .getAllBooksAvailable()
  .then((books: Book[]) => console.log(books));
