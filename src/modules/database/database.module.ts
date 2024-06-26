import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import PhotoEntity from '../../entity/photo.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // 你的数据库连接配置
      type: 'mysql', // 数据库类型
      host: '192.168.4.55',
      port: 3306,
      username: 'ken',
      password: '123456',
      database: 'test',
      // 其他配置...
      logging: true,
      entities: [
        PhotoEntity
      ],
    }),
  ],
})
export class DatabaseModule {};
