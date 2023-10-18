import { Test, TestingModule } from '@nestjs/testing';
import { GerenciamentoDeFuncionariosService } from './gerenciamento_de_funcionarios.service';

describe('GerenciamentoDeFuncionariosService', () => {
  let service: GerenciamentoDeFuncionariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GerenciamentoDeFuncionariosService],
    }).compile();

    service = module.get<GerenciamentoDeFuncionariosService>(GerenciamentoDeFuncionariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
