import { IBook } from '../model/book';

export interface LibraryRepository {
  getAllBooks(): Promise<IBook[]>;
}
