import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Schema({ collection: 'produtos', timestamps: true })
export class Produto extends Document {
  @Prop({ required: true, maxlength: 255 })
  nome: string;

  @Prop({ required: true, type: Number })
  preco: number;

  @Prop({ required: true, maxlength: 5000 })
  foto: string;

  @Prop({ type: Types.ObjectId, ref: 'Categoria', required: true })
  categoria: Types.ObjectId | Categoria;
}

export const ProdutoSchema = SchemaFactory.createForClass(Produto);
