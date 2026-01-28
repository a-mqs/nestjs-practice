import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Decorator - Recurso de anotação/decoração para modificar classes, funções, propriedades, etc. em tempo de execução 

// Module - Agrupador lógico de componentes relacionados (controllers, services, etc.) que podem ser referenciados
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
