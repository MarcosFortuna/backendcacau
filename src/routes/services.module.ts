import { Module } from '@nestjs/common';
import { ProdutorModule } from 'src/private-service/produtor/produtor.modules';
import { CadastroModule } from './cadastro/cadastro.module';

@Module({
  imports: [ProdutorModule, CadastroModule],
})
export class serviceModule {}
