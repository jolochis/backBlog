import { Module } from '@nestjs/common';
import { EntradaController } from './entrada.controller';
import { EntradaService } from './entrada.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EntradaController],
  providers: [EntradaService],
  imports: [PrismaModule],
})
export class EntradaModule {}
