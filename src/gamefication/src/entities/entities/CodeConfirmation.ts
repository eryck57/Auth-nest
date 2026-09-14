import { Column, Entity, Index, UpdateDateColumn } from 'typeorm';

@Index('code_confirmation_email_key', ['email'], { unique: true })
@Entity('code_confirmation', { schema: 'public' })
export class CodeConfirmation {
  @Column('int', {
    name: 'id',
    primary: true,
    unique: true,
    generated: 'increment',
  })
  id: number;
  @Column('character varying', { name: 'email', unique: true, length: 50 })
  email: string;

  @Column('character varying', { name: 'code', nullable: false, length: 6 })
  code: string;

  @UpdateDateColumn({
    type: 'timestamp with time zone',
    name: 'updated_at',
  })
  updatedAt: Date;

  @Column('character varying', { name: 'password', length: 60 })
  password: string;

  @Column('character varying', { name: 'username', length: 20 })
  username: string;
}
