import { IBook } from "../domain/model/book";
import { LibraryRepository } from "../domain/repositories/library.repository";

const books: IBook[] = [
  { bookId: 1, subject: "Angular" },
  { bookId: 2, subject: "React" },
  { bookId: 3, subject: "Vue" },
  { bookId: 4, subject: "Svelte" },
  { bookId: 5, subject: "Ember" },
  { bookId: 6, subject: "Backbone" },
  { bookId: 7, subject: "Solid" },
  { bookId: 8, subject: "Vanilla" },
  { bookId: 9, subject: "NodeJS" },
  { bookId: 10, subject: "NestJS" },
];

export class LibraryInfrastructure implements LibraryRepository {
  async getAllBooks(): Promise<IBook[]> {
    return this.queryAllBooks();
  }

  async queryAllBooks(): Promise<IBook[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return Promise.resolve(books);
  }
}
