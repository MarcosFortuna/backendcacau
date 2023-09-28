import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producao } from 'src/entity/producao.entity';
import { ProducaoService } from './producao.service';

@Module({
  imports: [TypeOrmModule.forFeature([Producao])],
  providers: [ProducaoService],
  exports: [ProducaoService],
})
export class ProducaoModule {}
