import { ApiProperty } from "@nestjs/swagger"

export class CreateUsuarioFinanceiroDto {
    
   // @ApiProperty({required: true})
    //id: number

    @ApiProperty({required: true})
    nome_cliente: string

    @ApiProperty({required: true})
    valor_recebido: number

    @ApiProperty({required: true})
    data_de_recebimento: Date

}
