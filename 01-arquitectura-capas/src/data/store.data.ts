export class StoreData {
  async isBookAvailable(bookId: number): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return Promise.resolve(Math.random() > 0.5 ? true : false);
  }
}
