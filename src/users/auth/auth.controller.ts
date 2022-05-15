import { Body, Controller, Inject, Post, ClassSerializerInterceptor, UseInterceptors, UseGuards, Req } from '@nestjs/common';

import { AuthService } from './auth.service';
import { RegisterDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { LoginDto } from '../dto/login-user.dto';
import { ActiveJwtAuthGuard, JwtAuthGuard } from './auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly service: AuthService;

  @Post('register')
  @UseInterceptors(ClassSerializerInterceptor)
  private register(@Body() body: RegisterDto): Promise<User | never> {
    return this.service.register(body);
  }

  @Post('login')
  private login(@Body() body: LoginDto): Promise<string | never> {
    return this.service.login(body);
  }

  @Post('refresh')
  @UseGuards(ActiveJwtAuthGuard)
  private refresh(@Req() { user }: Request): Promise<string | never> {
    return this.service.refresh(<User>user);
  }
}