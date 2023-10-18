import { PartialType } from '@nestjs/swagger';
import { GerenciamentodeClientesDto } from './GerenciamentodeClientes.dto';

export class UpdatePartialGerenciamentodeClientesDto extends PartialType(GerenciamentodeClientesDto) {}



