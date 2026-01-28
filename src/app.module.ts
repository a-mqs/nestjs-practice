import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

// Decorator - Recurso de anotação/decoração para modificar classes, funções, propriedades, etc. em tempo de execução 

// Module - Agrupador lógico de componentes relacionados (controllers, services, etc.) que podem ser referenciados
@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
