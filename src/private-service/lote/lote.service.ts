import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/abstract/generic.service';
import { Lote } from 'src/entity/lote.entity';

@Injectable()
export class LoteService extends GenericService<Lote> {
  constructor(
    @InjectRepository(Lote)
    protected readonly repository: Repository<Lote>,
  ) {
    super(repository);
  }
}
