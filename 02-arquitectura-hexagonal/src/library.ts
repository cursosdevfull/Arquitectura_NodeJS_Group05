import { IBook } from "./ports/books";
import { ILibraryRepository } from "./ports/library.repository";
import { IStoreRepository } from "./ports/store.repository";

export class Library {
  constructor(
    private readonly libraryRepository: ILibraryRepository,
    private storeRepository: IStoreRepository
  ) {}

  async getAllBooksAvailable(): Promise<IBook[]> {
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
