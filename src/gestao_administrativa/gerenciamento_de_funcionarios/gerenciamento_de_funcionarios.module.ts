import { Module } from '@nestjs/common';
import { GerenciamentoDeFuncionariosController } from './gerenciamento_de_funcionarios.controller';
import { GerenciamentoDeFuncionariosService } from './gerenciamento_de_funcionarios.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({imports:[PrismaModule],
  controllers: [GerenciamentoDeFuncionariosController],
  providers: [GerenciamentoDeFuncionariosService,PrismaService,PrismaModule]
})

export class GerenciamentoDeFuncionariosModule {}
