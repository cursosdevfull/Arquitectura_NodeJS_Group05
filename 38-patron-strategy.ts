type STATE_BOOK = "NEW" | "GOOD" | "REGULAR";

interface IBook {
  id: number;
  title: string;
  state: STATE_BOOK;
  isAvailable: boolean;
}

class Stock {
  private static booksList: Array<IBook> = [
    { id: 1, title: "NodeJS", state: "NEW", isAvailable: true },
    { id: 2, title: "NodeJS", state: "NEW", isAvailable: true },
    { id: 3, title: "NodeJS", state: "GOOD", isAvailable: true },
    { id: 4, title: "NodeJS", state: "REGULAR", isAvailable: true },
    { id: 5, title: "Angular", state: "NEW", isAvailable: true },
    { id: 6, title: "Angular", state: "NEW", isAvailable: false },
    { id: 7, title: "Angular", state: "NEW", isAvailable: true },
    { id: 8, title: "Angular", state: "REGULAR", isAvailable: true },
    { id: 10, title: "Typescript", state: "NEW", isAvailable: true },
    { id: 11, title: "Typescript", state: "GOOD", isAvailable: true },
    { id: 12, title: "Typescript", state: "REGULAR", isAvailable: false },
    { id: 13, title: "Typescript", state: "REGULAR", isAvailable: true },
  ];

  static get books(): Array<IBook> {
    return [...this.booksList];
  }
}

abstract class SearchStrategy {
  private booksList: Array<IBook>;

  constructor() {
    this.booksList = Stock.books;
  }

  abstract findBook(title: string): IBook;

  private updateAvailability(id: number) {
    const bookMatched = this.booksList.find((book: IBook) => book.id === id);
    if (bookMatched) bookMatched.isAvailable = false;
  }

  protected findBooksByStates(title: string, ...states: Array<STATE_BOOK>) {
    let position = 0;
    let bookMatched: IBook | undefined;

    while (position < states.length) {
      bookMatched = this.booksList.find(
        (book: IBook) =>
          book.title === title &&
          book.state === states[position] &&
          book.isAvailable
      );
      position++;

      if (bookMatched) break;
    }

    if (bookMatched) this.updateAvailability(bookMatched.id);

    return bookMatched;
  }
}

class Researcher extends SearchStrategy {
  findBook(title: string): IBook {
    return this.findBooksByStates(title, "NEW", "GOOD", "REGULAR");
  }
}

class Teacher extends SearchStrategy {
  findBook(title: string): IBook {
    return this.findBooksByStates(title, "GOOD", "REGULAR", "NEW");
  }
}

class Student extends SearchStrategy {
  findBook(title: string): IBook {
    return this.findBooksByStates(title, "REGULAR", "GOOD");
  }
}

class Strategy {
  static findBookByRole(role: { new (): SearchStrategy }, title: string) {
    const instance = new role();
    return instance.findBook(title);
  }
}

const book1: IBook = Strategy.findBookByRole(Student, "NodeJS");
const book2: IBook = Strategy.findBookByRole(Teacher, "NodeJS");
const book3: IBook = Strategy.findBookByRole(Researcher, "NodeJS");

console.log("book1", book1);
console.log("book2", book2);
console.log("book3", book3);
