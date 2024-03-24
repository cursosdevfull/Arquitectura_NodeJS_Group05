import { StoreRepository } from "src/domain/repositories/store.repository";

import { IBook } from "../domain/model/book";
import { LibraryRepository } from "../domain/repositories/library.repository";

export class LibraryApplication {
  constructor(
    private readonly libraryRepository: LibraryRepository,
    private readonly storeRepository: StoreRepository
  ) {}

  async getBooksAvailable(): Promise<IBook[]> {
    const books = await this.libraryRepository.getAllBooks();

    const listOfPromises = books.map(async (book) => {
      const isAvailable = await this.storeRepository.isBookAvailable(
        book.bookId
      );
      return isAvailable ? book : null;
    });

    const booksAvailable = await Promise.all(listOfPromises);

    return booksAvailable.filter((book) => book !== null) as IBook[];
  }

  async getBookById(bookId: number): Promise<IBook | undefined> {
    return await this.libraryRepository.getBookById(bookId);
  }
}
