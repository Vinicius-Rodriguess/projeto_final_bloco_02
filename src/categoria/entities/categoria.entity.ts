import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from '../../produtos/entities/produtos.entity';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 1000, nullable: false })
  tipo: string;

  @OneToMany(() => Produto, (produtos) => produtos.categoria)
  produtos: Produto[];
}
