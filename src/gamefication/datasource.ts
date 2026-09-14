import { DataSource } from 'typeorm';
import { Users } from './src/entities/entities/Users';
import { CodeConfirmation } from './src/entities/entities/CodeConfirmation';
import { Stats } from './src/entities/entities/Stats';

export const Appdatasource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'gamefication',
  entities: [Users, CodeConfirmation, Stats],
  migrations: ['./src/migrations/*.ts'],
  synchronize: false,
});
Appdatasource.initialize();
