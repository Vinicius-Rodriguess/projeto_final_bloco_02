import { Module } from '@nestjs/common';
import { Produto, ProdutoSchema } from './entities/produtos.entity';
import { ProdutosController } from './controllers/produtos.controller';
import { ProdutosService } from './services/produto.service';
import { CategoriaModule } from '../categoria/categoria.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Produto.name, schema: ProdutoSchema }]),
    CategoriaModule,
  ],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutoModule {}
