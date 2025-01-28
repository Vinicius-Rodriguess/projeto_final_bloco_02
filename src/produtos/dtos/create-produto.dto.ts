import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';
import { Categoria } from '../../categoria/entities/categoria.entity';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  preco: number;

  @IsString()
  @IsNotEmpty()
  foto: string;

  @IsNotEmpty()
  categoria: Categoria;
}
