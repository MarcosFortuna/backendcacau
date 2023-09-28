import { Injectable } from '@nestjs/common';
import { Propriedade } from 'src/entity/propriedade.entity';
import { Payload } from 'src/models/payload';
import { LoteService } from 'src/private-service/lote/lote.service';
import { ProducaoService } from 'src/private-service/producao/producao.service';
import { ProdutorService } from 'src/private-service/produtor/produtor.service';
import { PropriedadeService } from 'src/private-service/propriedade/propriedade.service';

@Injectable()
export class cadastroService {
  constructor(
    private readonly producaoService: ProducaoService,
    private readonly produtorService: ProdutorService,
    private readonly loteService: LoteService,
    private readonly propriedadeService: PropriedadeService,
  ) {}

  public async create(record: Payload) {
    const { produtor, propriedade, producao, lotes } = record;

    // validação
    // produtor é minha entidade pai
    // portanto deve ser criada no db primeiro
    // se produtor n puder ser criado?
    const savedProdutor = await this.produtorService.create(produtor);
    if (!produtor) {
      // se não cria produtor mandar error
      throw new Error('Não foi possivel criar um produtor');
    }
    // no caso de um pra n
    await Promise.all(
      lotes?.map(async (lote) => {
        const savedLote = await this.loteService.create({
          ...lote,
          produtor,
        });
      }),
    );

    const savedPropriedade = await this.propriedadeService.create({
      ...propriedade,
      produtor,
    } as Propriedade);
  }
}
