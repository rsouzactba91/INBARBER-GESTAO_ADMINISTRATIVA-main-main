import {Controller, Post, Body, Get, Param,Put, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { gestaodeservicosDto } from './dto/gestaodeservicos.dto';
import { UpdateEstoqueDto } from 'src/gestao_administrativa/controle_de_estoque/dto/update-estoque.dto';
import { UpdatePartialgestaodeservicosDto } from './dto/update-partial-gestaodeservico.dto';
import { GestaoDeServicosService } from './gestao-de-servicos.service';
import { UpdategestaodeservicosDto } from './dto/update-gestaodeservicos.dto';

@Controller('gestao-de-servicos')
export class GestaoDeServicosController {

    constructor(private readonly gestaodeservicos:GestaoDeServicosService) {}


    @Post()
    async create(@Body() data:gestaodeservicosDto){
        return this.gestaodeservicos.create(data)};
    
           
        @Get()
        async list(){
           return this.gestaodeservicos.list()
        }
        
        
        @Get(':id')
        async show(@Param('id', ParseIntPipe) id:number){
           return this.gestaodeservicos.show(id);
        }
        
        
        @Put(':id')
        update(@Body()  data:UpdategestaodeservicosDto,@Param('id',ParseIntPipe) id:number){
           return this.gestaodeservicos.update(id,data,
           );
        }
        
        @Patch(':id')
        async updatePartial(@Body() data:UpdatePartialgestaodeservicosDto,@Param('id', ParseIntPipe) id:number){
           return this.gestaodeservicos.updatePartial(id,data,
               );
        }
        
        @Delete(':id')
        async remove(@Param('id', ParseIntPipe) id:number){
           return this.gestaodeservicos.remove(id);
        }
        }
        