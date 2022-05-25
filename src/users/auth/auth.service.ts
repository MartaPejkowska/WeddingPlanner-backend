import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { MailService } from 'src/mail/mail.service';
import { Repository } from 'typeorm';
import { RegisterDto } from '../dto/create-user.dto';
import { LoginDto} from '../dto/login-user.dto';
import { User, UserRole } from '../entities/user.entity';
import { AuthHelper } from './auth.helper';

@Injectable()
export class AuthService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  @Inject(AuthHelper)
  private readonly helper: AuthHelper;

  @Inject(MailService)
  private mailer: MailService;

  @Inject(ConfigService)
  private config: ConfigService;



  public async register(body: RegisterDto): Promise<User | never> {
    const { firstName,lastName, email, password }: RegisterDto = body;
    let user: User = await this.repository.findOne({ where: { email } });

    if (user) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    user = new User();

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.isActive = false;
    user.role = UserRole.USER
    user.password = this.helper.encodePassword(password);

    return this.repository.save(user).then( user => {
      let token =  this.helper.generateToken(user);
      this.mailer.sendActivationLink(token,user, this.config.get('FRONT_URL'));
      return user
     }) ;
  }

  public async login(body: LoginDto): Promise<string | never> {
    const { email, password }: LoginDto = body;
    const user: User = await this.repository.findOne({ where: { email } });

    if (!user) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }

    const isPasswordValid: boolean = this.helper.isPasswordValid(password, user.password);
    const isUserActive: boolean = user.isActive;

    if (!isPasswordValid || !isUserActive) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }


    this.repository.update(user.id, { lastLoginAt: new Date() });

    return this.helper.generateToken(user);
  }

  public async refresh(user: User): Promise<string> {
    this.repository.update(user.id, { lastLoginAt: new Date() });

    return this.helper.generateToken(user);
  }
}