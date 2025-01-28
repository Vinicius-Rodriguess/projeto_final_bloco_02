import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produtos } from '../../produtos/entities/produtos.entity';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  tipo: string;

  @OneToMany(() => Produtos, (produtos) => produtos.categoria)
  produtos: Produtos[];
}
