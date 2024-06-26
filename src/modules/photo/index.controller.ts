import { Controller, Get, Inject } from '@nestjs/common';
import { PhotoService } from './index.service';

import { AppDataSource } from '../database/data-source';
import Photo from 'src/entity/photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  getHello(): string {
    return this.photoService.getList();
  }

  @Get('/save')
  async getInfo(): Promise<any> {
    const photo = new Photo();
    photo.name = 'kenan';
    photo.description = 'demo desp';
    photo.filename = '';
    photo.url = '';
    photo.views = 1;
    photo.isPublished = true;

    await AppDataSource.manager.save(photo);
    return 'ok'
  }
}
