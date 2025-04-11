import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateCategoriaDto } from '../dtos/create-categoria.dto';
import { UpdateCategoriaDto } from '../dtos/update-categoria.dto';
import { Categoria } from '../entities/categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectModel(Categoria.name)
    private readonly categoriaModel: Model<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return this.categoriaModel.find().populate('produtos').exec();
  }

  async findById(id: string): Promise<Categoria> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('ID inválido');
    }

    const categoria = await this.categoriaModel
      .findById(id)
      .populate('produtos')
      .exec();
    if (!categoria) throw new NotFoundException('Categoria não encontrada.');
    return categoria;
  }

  async findByType(tipo: string): Promise<Categoria[]> {
    return this.categoriaModel
      .find({ tipo: { $regex: tipo, $options: 'i' } })
      .populate('produtos')
      .exec();
  }

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const createdCategoria = new this.categoriaModel(createCategoriaDto);
    return createdCategoria.save();
  }

  async update(updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
    const { id, ...updateData } = updateCategoriaDto;

    await this.findById(id);

    await this.categoriaModel.updateOne({ _id: id }, updateData).exec();
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.categoriaModel.deleteOne({ _id: id }).exec();
  }
}
