import { Book, LibraryData } from "../data/library.data";
import { StoreData } from "../data/store.data";

export class LibraryBusiness {
  libraryData = new LibraryData();
  storeData = new StoreData();

  async getAllBooksAvailable(): Promise<Book[]> {
    const books = await this.libraryData.getAllBooks();

    const listOfPromises = books.map(async (book) => {
      const isAvailable = await this.storeData.isBookAvailable(book.bookId);
      return isAvailable ? book : null;
    });

    const booksAvailable = await Promise.all(listOfPromises);

    return booksAvailable.filter((book) => book !== null);
  }
}
