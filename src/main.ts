
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT');

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  
  const swaggerConfig = new DocumentBuilder()
  .setTitle('API with NestJS')
  .setDescription('API developed throughout the API with NestJS course')
  .setVersion('1.0')
  .build();
  
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
  
    await app.listen(port, () => {
      console.log('[WEB]', config.get<string>('BASE_URL'));
    });
  
}

bootstrap();



 
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
 
//   const configService = app.get(ConfigService);
 
//   // ...
 
 
// }
// bootstrap();