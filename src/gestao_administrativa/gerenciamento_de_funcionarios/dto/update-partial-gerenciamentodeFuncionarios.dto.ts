import { PartialType } from '@nestjs/swagger';
import { createGerenciamentodeFuncionariosDto } from './create-gerenciamentodeFuncionarios.dto';

export class UpdatePartialGerenciamentodeFuncionariosDto extends PartialType(createGerenciamentodeFuncionariosDto) {}
