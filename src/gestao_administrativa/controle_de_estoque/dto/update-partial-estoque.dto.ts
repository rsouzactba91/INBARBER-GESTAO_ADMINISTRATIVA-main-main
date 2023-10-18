import { PartialType } from '@nestjs/swagger';
import { CreateEstoqueDto } from './create-estoque.dto';

export class UpdatePartialEstoqueDto extends PartialType(CreateEstoqueDto) {}
