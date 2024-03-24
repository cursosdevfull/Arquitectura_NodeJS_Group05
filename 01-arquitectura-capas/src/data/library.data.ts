export type Subject =
  | "Angular"
  | "React"
  | "Vue"
  | "Svelte"
  | "Ember"
  | "Backbone"
  | "Solid"
  | "Vanilla"
  | "NodeJS"
  | "NestJS";

export class Book {
  constructor(
    public readonly bookId: number,
    public readonly subject: Subject
  ) {}
}

const books: Book[] = [
  new Book(1, "Angular"),
  new Book(2, "React"),
  new Book(3, "Vue"),
  new Book(4, "Svelte"),
  new Book(5, "Ember"),
  new Book(6, "Backbone"),
  new Book(7, "Solid"),
  new Book(8, "Vanilla"),
  new Book(9, "NodeJS"),
  new Book(10, "NestJS"),
];

export class LibraryData {
  async getAllBooks(): Promise<Book[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return Promise.resolve(books);
  }

  async getBookById(bookId: number): Promise<Book | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return Promise.resolve(books.find((book) => book.bookId === bookId));
  }
}
