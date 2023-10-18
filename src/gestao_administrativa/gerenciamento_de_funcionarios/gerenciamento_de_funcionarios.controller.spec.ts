import { Test, TestingModule } from '@nestjs/testing';
import { GerenciamentoDeFuncionariosController } from './gerenciamento_de_funcionarios.controller';

describe('GerenciamentoDeFuncionariosController', () => {
  let controller: GerenciamentoDeFuncionariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GerenciamentoDeFuncionariosController],
    }).compile();

    controller = module.get<GerenciamentoDeFuncionariosController>(GerenciamentoDeFuncionariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
