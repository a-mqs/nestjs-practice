import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Bootstrap - A primeira função a ser executada no NestJS
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
