import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/abstract/generic.service';
import { Produtor } from 'src/entity/produtor.entity';

@Injectable()
export class ProdutorService extends GenericService<Produtor> {
  constructor(
    @InjectRepository(Produtor)
    protected readonly repository: Repository<Produtor>,
  ) {
    super(repository);
  }
}
