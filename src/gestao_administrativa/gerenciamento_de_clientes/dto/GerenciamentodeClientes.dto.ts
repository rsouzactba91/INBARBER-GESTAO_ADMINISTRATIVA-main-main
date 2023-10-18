import { ApiProperty } from "@nestjs/swagger";

export class GerenciamentodeClientesDto{

@ApiProperty()
nome: string;

@ApiProperty()
email: string;

@ApiProperty()
data_criacao: Date;
}