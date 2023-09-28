import { DataSource, DataSourceOptions } from 'typeorm';

export const dbConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.HOST_DB,
  port: 3307,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  extra: { insecureAuth: true },
  migrations: ['dist/**/migrations/*{.ts,.js}'],
};

const dataSource = new DataSource(dbConfig);
export default dataSource;
