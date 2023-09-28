import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/abstract/generic.service';
import { Producao } from 'src/entity/producao.entity';

@Injectable()
export class ProducaoService extends GenericService<Producao> {
  constructor(
    @InjectRepository(Producao)
    protected readonly repository: Repository<Producao>,
  ) {
    super(repository);
  }
}
