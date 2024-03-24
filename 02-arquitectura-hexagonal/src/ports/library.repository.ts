import { IBook } from "./books";

export interface ILibraryRepository {
  getAllBooks(): Promise<IBook[]>;
}
