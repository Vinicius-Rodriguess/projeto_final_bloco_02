import { Module } from '@nestjs/common';
import { Produto } from './entities/produtos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosController } from './controllers/produtos.controller';
import { ProdutosService } from './services/produto.service';
import { CategoriaModule } from '../categoria/categoria.module';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutoModule {}
