import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsNumberString, IsString, Min, MinLength, isInt, isNumber, minDate } from "class-validator";

export class CreateEstoqueDto {
    
   // @ApiProperty({required: true})
    //id_produto: number;

    @ApiProperty({required: true})
    @IsString()
   nome: string;

    @ApiProperty({required: true})
    categoria: string;

    @ApiProperty({required: true})
    preco: number;

     @ApiProperty({required: true})
    quantidade: number;
    
    @ApiProperty({required: true})
    fornecedor: string;
    
    @ApiProperty({required: true})
    data_de_recebimento: Date;

    @ApiProperty({required: true})
    data_de_validade:Date;

}
    
   