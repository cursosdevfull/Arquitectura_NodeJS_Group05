import { LibraryAdapter } from "./adapters/library.adapter";
import { StoreAdapter } from "./adapters/store.adapter";
import { Library } from "./library";

const library = new Library(new LibraryAdapter(), new StoreAdapter());

library.getAllBooksAvailable().then((books) => {
  console.log(books);
});
