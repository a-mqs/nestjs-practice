import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

// Controller - Porta de entrada da aplicação, lida com requisições e respostas HTTP
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  setHello(): string {
    return 'POST: Hello World!';
  }
}
