import { StoreRepository } from '../domain/repositories/store.repository';

export class StoreInfrastructure implements StoreRepository {
  async isBookAvailable(bookId: number): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return Promise.resolve(Math.random() > 0.5 ? true : false);
  }
}
