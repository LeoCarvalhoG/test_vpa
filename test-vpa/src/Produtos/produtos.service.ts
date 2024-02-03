import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produtos } from './entities/produtos.entity';

@Injectable()
export class ProdutosService {
    constructor(
        @InjectRepository(Produtos)
        private readonly ProdutosRepository: Repository<Produtos>,
    ) { }

    async findAll() {
        try {
            const produtos: Produtos[] = await this.ProdutosRepository.find();

            if (produtos.length > 0) {
                const listaProdutos = produtos.map(produto => ({
                    codigo: produto.codigo,
                    id: produto.id,
                    nome: produto.nome,
                    preco: produto.preco,
                    quantidade: produto.quantidade,
                }));

                return listaProdutos;
            } else {
                return [{ message: 'Nenhum produto encontrado' }];
            }
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}
