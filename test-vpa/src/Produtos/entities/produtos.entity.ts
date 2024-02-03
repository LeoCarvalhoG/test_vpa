import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'produtos' })
export class Produtos {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({ name: 'codigo', type: 'bigint' })
    codigo: number;

    @Column({ name: 'nome', type: 'varchar' })
    nome: string;

    @Column({ name: 'preco', type: 'bigint' })
    preco: number;

    @Column({ name: 'quantidade', type: 'bigint' })
    quantidade: number;
}
