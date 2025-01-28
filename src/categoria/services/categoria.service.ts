import { Injectable, NotFoundException } from '@nestjs/common';
import { Categoria } from '../entities/categoria.entity';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoriaDto } from '../dtos/create-categoria.dto';
import { UpdateCategoriaDto } from '../dtos/update-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find({
      relations: {
        produtos: true,
      },
    });
  }

  async findById(id: number): Promise<Categoria> {
    const tema = await this.categoriaRepository.findOne({
      where: { id },
      relations: {
        produtos: true,
      },
    });
    if (!tema) throw new NotFoundException('Categoria não encontrada.');
    return tema;
  }

  async findByType(tipo: string): Promise<Categoria[]> {
    return this.categoriaRepository.find({
      where: {
        tipo: ILike(`%${tipo}%`),
      },
      relations: {
        produtos: true,
      },
    });
  }

  async create(categoria: CreateCategoriaDto): Promise<Categoria> {
    return await this.categoriaRepository.save(categoria);
  }

  async update(categoria: UpdateCategoriaDto): Promise<Categoria> {
    await this.findById(categoria.id);
    return await this.categoriaRepository.save(categoria);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return this.categoriaRepository.delete(id);
  }
}
