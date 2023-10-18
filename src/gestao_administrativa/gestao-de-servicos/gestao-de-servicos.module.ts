import { Module } from '@nestjs/common';
import { GestaoDeServicosService } from './gestao-de-servicos.service';
import { GestaoDeServicosController } from './gestao-de-servicos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({imports:[PrismaModule],
    providers: [GestaoDeServicosService, PrismaService],
  controllers: [GestaoDeServicosController],
})

export class GestaoDeServicosModule {}
