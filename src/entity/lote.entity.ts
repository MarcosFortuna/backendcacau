import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'lote' })
export class Lote extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public comercializaCommodityBulk: boolean;

  @Column()
  public comercializaVarietal: boolean;

  @Column()
  public comercializaOrganico: boolean;

  @Column()
  public comercializaFino: boolean;

  @Column()
  public comercializaQualidade: boolean;

  @Column()
  public fermentaCacau: boolean;

  @Column()
  public diasFermentacao: number;

  @Column()
  public metodoSecEstufa: boolean;

  @Column()
  public metodoLenha: boolean;

  @Column()
  public metodoSol: boolean;

  @Column()
  public evitaQueima: boolean;

  @Column()
  public tripliceLavagem: boolean;

  @Column()
  public localManuseioAgrotoxico: boolean;

  @Column()
  public embalagemAgrotoxico: boolean;

  @Column()
  public NaoInsumoAgricola: boolean;

  @Column()
  public LocalArmazem: boolean;

  @Column()
  public LocalBarcacao: boolean;

  @Column()
  public LocalDeposito: boolean;

  @Column()
  public LocalSecador: boolean;

  @Column()
  public LocalCasa: boolean;

  @Column()
  public tempoEstoque: number;

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
