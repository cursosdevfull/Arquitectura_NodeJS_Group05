export interface IStoreRepository {
  isBookAvailable(bookId: number): Promise<boolean>;
}
