import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId, IsNotEmpty } from 'class-validator';
import { CreateCategoriaDto } from './create-categoria.dto';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {
  @IsMongoId()
  @IsNotEmpty()
  id: string;
}
