import { Module } from "@nestjs/common";
import { PhotoController } from './index.controller'
import { PhotoService } from "./index.service";

@Module({
  controllers: [PhotoController],
  providers: [PhotoService]
})
export class PhotoModule {

}