import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Propriedade } from 'src/entity/propriedade.entity';
import { PropriedadeService } from './propriedade.service';

@Module({
  imports: [TypeOrmModule.forFeature([Propriedade])],
  providers: [PropriedadeService],
  exports: [PropriedadeService],
})
export class PropriedadeModule {}
