import { PartialType } from '@nestjs/swagger';
import { gestaodeservicosDto } from './gestaodeservicos.dto';

export class UpdatePartialgestaodeservicosDto extends PartialType(gestaodeservicosDto) {}



