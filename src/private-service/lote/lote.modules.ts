import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lote } from 'src/entity/lote.entity';
import { LoteService } from './lote.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lote])],
  providers: [LoteService],
  exports: [LoteService],
})
export class LoteModule {}
