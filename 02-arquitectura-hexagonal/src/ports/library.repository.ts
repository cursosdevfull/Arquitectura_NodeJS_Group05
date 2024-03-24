import { IBook } from "./books";

export interface ILibraryRepository {
  getAllBooks(): Promise<IBook[]>;

  getBookById(bookId: number): Promise<IBook | undefined>;
}
