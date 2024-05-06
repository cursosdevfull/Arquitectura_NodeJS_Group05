import {
  CanActivate,
  ConflictException,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../../user/presentation/services/token.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    if (!request.headers.authorization)
      throw new UnauthorizedException('Token not found');

    const [type, token] = request.headers.authorization.split(' ');
    if (type !== 'Bearer' || !token)
      throw new UnauthorizedException('Token not found');

    try {
      const payload: any = jwt.verify(token, JWT_SECRET);
      request.user = { roles: payload.roles.map((role) => role.name) };
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new ConflictException('Token expired');
      } else {
        throw new UnauthorizedException('Invalid token');
      }
    }

    return true;
  }
}
