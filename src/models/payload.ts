import { Lote } from 'src/entity/lote.entity';
import { Producao } from 'src/entity/producao.entity';
import { Produtor } from 'src/entity/produtor.entity';
import { Propriedade } from 'src/entity/propriedade.entity';

export interface Payload {
  produtor: Produtor;
  lotes: Lote[];
  producao: Producao;
  propriedade: Propriedade;
}
