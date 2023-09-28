import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericService } from 'src/abstract/generic.service';
import { Propriedade } from 'src/entity/propriedade.entity';

@Injectable()
export class PropriedadeService extends GenericService<Propriedade> {
  constructor(
    @InjectRepository(Propriedade)
    protected readonly repository: Repository<Propriedade>,
  ) {
    super(repository);
  }
}
