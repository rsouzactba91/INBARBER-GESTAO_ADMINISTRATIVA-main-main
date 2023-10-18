import { ApiProperty } from "@nestjs/swagger";

export class gestaodeservicosDto{

//@ApiProperty({required: true})
  //  id: number

    @ApiProperty({required: true})
    nome_servico: string

    @ApiProperty({required: true})
    descricao: string

    @ApiProperty({required: true})
    status: string

    @ApiProperty({required: true})
    datainicio: Date
}