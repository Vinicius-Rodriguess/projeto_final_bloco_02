import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Produto } from '../../produtos/entities/produtos.entity';

@Schema({ collection: 'categorias', timestamps: true })
export class Categoria extends Document {
  @Prop({ required: true, maxlength: 1000 })
  tipo: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Produto' }], default: [] })
  produtos: Types.ObjectId[] | Produto[];
}

export const CategoriaSchema = SchemaFactory.createForClass(Categoria);
