import { Module } from '@nestjs/common';
import { ProdutorModule } from 'src/private-service/produtor/produtor.modules';

@Module({
  imports: [ProdutorModule],
})
export class serviceModule {}
