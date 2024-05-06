import * as jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

import { User } from '../../domain/user';

export const JWT_SECRET = 'ef45d08e-197a-402d-85d8-21c346e4af27';

export class TokenService {
  static generateRefreshToken() {
    return uuidv4();
  }

  static generateAccessToken(user: User) {
    const { name, lastname, id, roles } = user.properties;

    const payload = { name, lastname, id, roles };
    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: '1h',
    });
  }
}
