import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntradaModule } from './entrada/entrada.module';

@Module({
  imports: [EntradaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
