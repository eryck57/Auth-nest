import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users';

@Index('stats_pkey', ['id'], { unique: true })
@Entity('stats', { schema: 'public' })
export class Stats {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('jsonb', {
    name: 'attributes',
    nullable: true,
    default: {
      foco: 0,
      obsessao: 0,
      disciplina: 0,
      raciocinio: 0,
      mentalidade: 0,
    },
  })
  attributes: object | null;

  @Column('character varying', {
    name: 'rank',
    nullable: true,
    length: 10,
    default: () => "'E'",
  })
  rank: string | null;

  @Column('integer', { name: 'level', nullable: true, default: () => '1' })
  level: number | null;

  @Column('integer', { name: 'currentXP', nullable: true, default: () => '0' })
  currentXp: number | null;

  @ManyToOne(() => Users, (users) => users.stats, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: Users;
}
