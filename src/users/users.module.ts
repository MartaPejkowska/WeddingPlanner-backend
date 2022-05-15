import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { MailModule } from 'src/mail/mail.module';
import { AuthModule } from './auth/auth.module';
import { AuthHelper } from './auth/auth.helper';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [TypeOrmModule.forFeature([User]),MailModule,AuthModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
