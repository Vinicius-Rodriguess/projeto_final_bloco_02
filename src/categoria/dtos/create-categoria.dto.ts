import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Produto } from '../../produtos/entities/produtos.entity';

export class CreateCategoriaDto {
  @IsNotEmpty()
  @IsString()
  tipo: string;

  @IsOptional()
  produtos?: Produto[];
}
