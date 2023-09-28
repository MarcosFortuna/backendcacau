import { Body, Controller, Get, Post } from '@nestjs/common';
import { cadastroService } from './cadastro.service';

@Controller('cadastro')
export class CadastroController {
  constructor(private readonly cadastroService: cadastroService) {}
  @Post()
  public async create(@Body() body: any) {
    try {
      return await this.cadastroService.create(body);
    } catch (error) {
      console.log(error);
    }
  }
}
