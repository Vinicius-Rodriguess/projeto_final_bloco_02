import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsMongoId,
} from 'class-validator';

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
  @IsMongoId()
  categoria: string;
}
