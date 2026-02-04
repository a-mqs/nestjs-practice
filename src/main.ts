import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// Bootstrap - A primeira função a ser executada no NestJS
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
