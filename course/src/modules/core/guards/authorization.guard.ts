import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const rolesAllowed = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!rolesAllowed) return true;

    const { user } = context.switchToHttp().getRequest();
    console.log('user.roles', user.roles);

    return rolesAllowed.some((role) => user.roles?.includes(role));
  }
}
