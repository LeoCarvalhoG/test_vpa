import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './Produtos.service';
import { Produtos } from './entities/produtos.entity';

@Module({
    controllers: [ProdutosController],
    providers: [ProdutosService],
    imports: [TypeOrmModule.forFeature([Produtos])]
})
export class ProdutosModule { }
