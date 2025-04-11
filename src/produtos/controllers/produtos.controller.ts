import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from '../entities/produtos.entity';
import { ProdutosService } from '../services/produto.service';
import { CreateProdutoDto } from '../dtos/create-produto.dto';
import { UpdateProdutoDto } from '../dtos/update-produto.dto';

@Controller('/produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.produtosService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: string): Promise<Produto> {
    return this.produtosService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByName(@Param('nome') nome: string): Promise<Produto[]> {
    return this.produtosService.findByName(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() produto: CreateProdutoDto): Promise<Produto> {
    return this.produtosService.create(produto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() produto: UpdateProdutoDto): Promise<Produto> {
    return this.produtosService.update(produto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    return this.produtosService.delete(id);
  }
}
