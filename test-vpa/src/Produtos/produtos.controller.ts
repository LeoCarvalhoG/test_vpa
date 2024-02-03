import { Controller, Get } from '@nestjs/common';
import { ProdutosService } from './Produtos.service';

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtosService: ProdutosService) { }

    @Get()
    findAll() {
        return this.produtosService.findAll();
    }
}
