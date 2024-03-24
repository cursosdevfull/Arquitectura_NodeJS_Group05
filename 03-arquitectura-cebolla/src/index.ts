import { LibraryApplication } from "./application/library.application";
import { LibraryRepository } from "./domain/repositories/library.repository";
import { StoreRepository } from "./domain/repositories/store.repository";
import { LibraryInfrastructure } from "./infrastructure/library.infrastructure";
import { StoreInfrastructure } from "./infrastructure/store.infrastructure";

const libraryInfrastructure: LibraryRepository = new LibraryInfrastructure();
const storeInfrastructure: StoreRepository = new StoreInfrastructure();
const libraryApplication = new LibraryApplication(
  libraryInfrastructure,
  storeInfrastructure
);

libraryApplication.getBooksAvailable().then((books) => {
  console.log(books);
});

libraryApplication.getBookById(8).then((book) => {
  if (book) {
    console.log(book);
  } else {
    console.log("Book not found");
  }
});
