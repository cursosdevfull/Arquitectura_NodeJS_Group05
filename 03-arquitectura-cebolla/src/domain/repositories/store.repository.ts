export interface StoreRepository {
  isBookAvailable(bookId: number): Promise<boolean>;
}
