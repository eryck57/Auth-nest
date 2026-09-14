import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Stats } from './Stats';

@Index('users_email_key', ['email'], { unique: true })
@Index('users_pkey', ['id'], { unique: true })
@Entity('users', { schema: 'public' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'username', length: 20 })
  username: string;

  @Column('character varying', { name: 'email', unique: true, length: 50 })
  email: string;

  @Column('timestamp without time zone', {
    name: 'created_data',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdData: Date | null;

  @Column('character varying', { name: 'password', nullable: true, length: 60 })
  password: string | null;

  @OneToMany(() => Stats, (stats) => stats.user)
  stats: Stats[];
}
