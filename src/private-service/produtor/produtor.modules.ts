import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produtor } from 'src/entity/produtor.entity';
import { ProdutorService } from './produtor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produtor])],
  providers: [ProdutorService],
  exports: [ProdutorService],
})
export class ProdutorModule {}
