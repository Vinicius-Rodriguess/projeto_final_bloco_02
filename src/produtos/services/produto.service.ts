import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from '../entities/produtos.entity';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { CategoriaService } from '../../categoria/services/categoria.service';
import { CreateProdutoDto } from '../dtos/create-produto.dto';
import { UpdateProdutoDto } from '../dtos/update-produto.dto';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtosRepository: Repository<Produto>,
    private readonly categoriaService: CategoriaService,
  ) {}

  async findAll(): Promise<Produto[]> {
    return this.produtosRepository.find({
      relations: {
        categoria: true,
      },
    });
  }

  async findById(id: number): Promise<Produto> {
    const postagem = await this.produtosRepository.findOne({
      where: { id },
      relations: {
        categoria: true,
      },
    });
    if (!postagem) throw new NotFoundException('Produto não encontrado');
    return postagem;
  }

  async findByName(nome: string): Promise<Produto[]> {
    return this.produtosRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        categoria: true,
      },
    });
  }

  async create(produto: CreateProdutoDto): Promise<Produto> {
    await this.categoriaService.findById(produto.categoria.id);
    return await this.produtosRepository.save(produto);
  }

  async update(produto: UpdateProdutoDto): Promise<Produto> {
    await this.findById(produto.id);
    await this.categoriaService.findById(produto.categoria.id);
    return await this.produtosRepository.save(produto);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return this.produtosRepository.delete(id);
  }
}
