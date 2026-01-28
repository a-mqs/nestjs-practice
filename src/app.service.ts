import { Injectable } from '@nestjs/common';

// Service - Lógica de negócio da aplicação
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
