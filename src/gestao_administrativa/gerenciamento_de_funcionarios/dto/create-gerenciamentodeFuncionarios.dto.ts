import { ApiProperty } from "@nestjs/swagger";
import { IsString,IsEmail,IsStrongPassword} from "class-validator";


export class createGerenciamentodeFuncionariosDto {

    @ApiProperty({required: true})
    id_funcionario:number

    @ApiProperty({required: true})
    nome: string
    
    @ApiProperty({required: true})
    email:string   
    
    @ApiProperty({required: true})
    telefone: string
    
    @ApiProperty({required: true})
    criado_em: Date
    
    @ApiProperty({required: true})
    atualizado_em:Date
  }