import { IBook } from "../model/book";

export interface LibraryRepository {
  getAllBooks(): Promise<IBook[]>;
  getBookById(bookId: number): Promise<IBook | undefined>;
}
