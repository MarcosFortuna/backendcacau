import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'propriedade' })
export class Propriedade extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public nomePropriedade: string;

  @Column()
  public municipio: string;

  @Column()
  public estado: string;

  @Column()
  public latitude: number;

  @Column()
  public longitude: number;

  @Column()
  public areaTotal: number;

  @Column()
  public areaPreservada: number;

  @Column()
  public areaTotalCacau: number;

  @Column()
  public areaRecuperada: number;

  @Column()
  public areaOutrosCultivos: number;

  @Column()
  public areaBaixoCarbono: number;

  @Column()
  public moradiaAdequada: boolean;

  @Column()
  public aguaPotavel: boolean;

  @Column()
  public acessoInternet: boolean;

  @Column()
  public acessoTelefoniaMovel: boolean;

  @Column()
  public semDesmatamento: boolean;

  @Column()
  public lenhaIlegal: boolean;

  @Column()
  public areasDegradadas: boolean;

  @Column()
  public areasPreservacaoPermanente: boolean;

  @Column()
  public possuiCAR: boolean;
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
