import { DataSource } from 'typeorm';
import PhotoEntity from '../../entity/photo.entity'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '192.168.4.55',
  port: 3306,
  username: 'ken',
  password: '123456',
  database: 'test',
  logging: true,
  entities: [
    PhotoEntity
  ],
  synchronize: true,
});