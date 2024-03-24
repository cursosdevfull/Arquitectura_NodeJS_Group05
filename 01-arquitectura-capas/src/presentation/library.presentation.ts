import { LibraryBusiness } from "../business/library.business";

export class LibraryPresentation {
  libraryBusiness = new LibraryBusiness();

  async getAllBooksAvailable() {
    return await this.libraryBusiness.getAllBooksAvailable();
  }

  async getBookById(bookId: number) {
    return await this.libraryBusiness.getBookById(bookId);
  }
}
