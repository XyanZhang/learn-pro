import { Module } from "@nestjs/common";
import { PhotoController } from './index.controller'
import { PhotoService } from "./index.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import Photo from 'src/entity/photo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Photo]),
  ],
  controllers: [PhotoController],
  providers: [PhotoService]
})
export class PhotoModule {

}