import { User } from '../user';

export interface UserRepository {
  save(user: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findByRefreshToken(refreshToken: string): Promise<User>;
}
