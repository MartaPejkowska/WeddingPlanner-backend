import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { url } from 'inspector';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class MailService  {
  constructor(private mailerService: MailerService) {}


  
  async sendActivationLink( token: string,  user:User,url:String)  {
  

    await this.mailerService.sendMail({

      to: user.email,
      subject: 'Witaj w WeddingApp! ',
      template: 'src/mail/templates/activation_link', 
      context: {
        name: `${user.firstName} ${user.lastName}`,
        url: url+'/activation&token='+token
      },
    });

  
    console.log(url+'/activation&token='+token)
  }
}