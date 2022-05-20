import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeddingsModule } from './weddings/weddings.module';
import { UsersModule } from './users/users.module';
import { GroomsModule } from './grooms/grooms.module';
import { BridesModule } from './brides/brides.module';
import { BudgetsModule } from './budgets/budgets.module';
import { InvitationsModule } from './invitations/invitations.module';
import { LayoutsModule } from './layouts/layouts.module';
import { PicturesModule } from './pictures/pictures.module';
import { GuestsModule } from './guests/guests.module';
import { TablesModule } from './tables/tables.module';
import { PresentsModule } from './presents/presents.module';
import { CalendarsModule } from './calendars/calendars.module';
import { TasksModule } from './tasks/tasks.module';
import { getEnvPath } from './common/helper/env.helper';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { MailModule } from './mail/mail.module';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [ConfigModule.forRoot({ envFilePath, isGlobal: true }),TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),WeddingsModule, UsersModule, GroomsModule, BridesModule, BudgetsModule, InvitationsModule, LayoutsModule, PicturesModule, GuestsModule, TablesModule, PresentsModule, CalendarsModule, TasksModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
