import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'producao' })
export class Producao extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public anoProducao: number;

  @Column()
  public quiloProducao: number;

  @Column()
  public sistemaProducaoCacauNativo: boolean;

  @Column()
  public sistemaProducaoCacauIrrigado: boolean;

  @Column()
  public sistemaProducaoCacauSAF: boolean;

  @Column()
  public sistemaProducaoCacauPlenoSol: boolean;

  @Column()
  public variedadesCultivadas: string;

  @Column({ default: 0 })
  public pessoasFamiliares: number;

  @Column({ default: 0 })
  public pessoasAssalariados: number;

  @Column({ default: 0 })
  public pessoasParceirosMeeiros: number;

  @Column()
  public criancasFrequentamEscola: boolean;

  @Column()
  public sistemaAdministrativo: string;

  @Column()
  public perfilMaoDeObra: string;

  @Column({ default: 0 })
  public funcionariosFixos: number;

  @Column({ default: 0 })
  public funcionariosSafristas: number;

  @Column({ default: 0 })
  public funcionariosResidentes: number;

  @Column()
  public remuneraTrabalhadores: boolean;

  @Column()
  public direitosBeneficiosMaternidade: boolean;

  @Column()
  public trabalhadoresParticipamOrganizacoes: boolean;

  @Column()
  public trabalhadoresNaoSofremDiscriminacao: boolean;

  @Column()
  public possuiAssistenciaTecnica: boolean;

  @Column()
  public qualAssistenciaTecnica: string;

  @Column()
  public associadoEntidade: boolean;

  @Column()
  public qualEntidade: string;

  @Column()
  public vendeIntermediarioCidade: boolean;

  @Column()
  public vendeIntermediarioFazenda: boolean;

  @Column()
  public vendeDiretamenteConsumidor: boolean;

  @Column()
  public vendeEmpreendimentoLocal: boolean;

  @Column()
  public vendeCooperativa: boolean;

  @Column()
  public vendeIndustria: boolean;

  @Column()
  public vendaDiretaNibs: boolean;

  @Column()
  public comercializaAmendoa: boolean;

  @Column()
  public comercializaNibs: boolean;

  @Column()
  public comercializaCacauada: boolean;

  @Column()
  public comercializaChocolate: boolean;

  @Column()
  public comercializaLicor: boolean;

  @Column()
  public comercializaManteiga: boolean;

  @Column()
  public valorMedioQuiloComercializado: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updatedAt: Date;
}
