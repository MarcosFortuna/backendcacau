import { Module } from '@nestjs/common';
import { cadastroService } from './cadastro.service';
import { ProducaoModule } from 'src/private-service/producao/producao.modules';
import { CadastroController } from './cadastro.controller';

@Module({
  controllers: [CadastroController],
  providers: [cadastroService],
  imports: [ProducaoModule], // faz para os outros
})
export class CadastroModule {}
