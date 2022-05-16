import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard, IAuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User, UserRole } from '../entities/user.entity';


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements IAuthGuard {
  public handleRequest(err: unknown, user: User): any {
    return user;
  }

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);

    const { user} : Request = context.switchToHttp().getRequest();

    if(!user) return false;

    if(user instanceof User && user.isActive === true) {
      return true
    }
    return  false;
  }

}

@Injectable()
export class AdminGuard extends AuthGuard('jwt') implements IAuthGuard {
  public handleRequest(err: unknown, user: User): any {
    return user;
  }

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);

    const {user} : Request = context.switchToHttp().getRequest();

    if(!user) return false;

    if(user instanceof User && user.role === UserRole.ADMIN) {
      return true
    }
    return  false;
  }
}

  @Injectable()
export class ActiveJwtAuthGuard extends AuthGuard('jwt') implements IAuthGuard {
  public handleRequest(err: unknown, user: User): any {
    return user;
  }

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    await super.canActivate(context);

    const { user }: Request = context.switchToHttp().getRequest();

    return user ? true : false;
  }

}