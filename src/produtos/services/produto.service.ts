import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CategoriaService } from '../../categoria/services/categoria.service';
import { CreateProdutoDto } from '../dtos/create-produto.dto';
import { UpdateProdutoDto } from '../dtos/update-produto.dto';
import { Produto } from '../entities/produtos.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectModel(Produto.name)
    private readonly produtoModel: Model<Produto>,
    private readonly categoriaService: CategoriaService,
  ) {}

  async findAll(): Promise<Produto[]> {
    return this.produtoModel.find().populate('categoria').exec();
  }

  async findById(id: string): Promise<Produto> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('ID inválido');
    }

    const produto = await this.produtoModel
      .findById(id)
      .populate('categoria')
      .exec();
    if (!produto) throw new NotFoundException('Produto não encontrado');
    return produto;
  }

  async findByName(nome: string): Promise<Produto[]> {
    return this.produtoModel
      .find({ nome: { $regex: nome, $options: 'i' } })
      .populate('categoria')
      .exec();
  }

  async create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    await this.categoriaService.findById(createProdutoDto.categoria.toString());
    const createdProduto = new this.produtoModel(createProdutoDto);
    return createdProduto.save();
  }

  async update(updateProdutoDto: UpdateProdutoDto): Promise<Produto> {
    const { id, ...updateData } = updateProdutoDto;

    await this.findById(id);
    if (updateData.categoria) {
      await this.categoriaService.findById(updateData.categoria.toString());
    }

    await this.produtoModel.updateOne({ _id: id }, updateData).exec();
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.produtoModel.deleteOne({ _id: id }).exec();
  }
}
