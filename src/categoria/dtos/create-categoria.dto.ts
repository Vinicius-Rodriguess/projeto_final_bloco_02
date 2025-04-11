import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsMongoId } from 'class-validator';

export class CreateCategoriaDto {
  @IsNotEmpty()
  @IsString()
  tipo: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  produtos?: string[];
}
