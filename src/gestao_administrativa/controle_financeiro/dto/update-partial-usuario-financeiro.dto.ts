import { PartialType } from '@nestjs/swagger';
import {CreateUsuarioFinanceiroDto } from './create-usuario-financeiro.dto';

export class UpdatePartialUsuarioFinanceiroDto extends PartialType(CreateUsuarioFinanceiroDto) {}
