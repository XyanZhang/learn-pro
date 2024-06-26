import { Controller, Get, Inject } from '@nestjs/common';
import { PhotoService } from './index.service';
import Photo from 'src/entity/photo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('photo')
export class PhotoController {
  constructor(
    private readonly photoService: PhotoService,
    @InjectRepository(Photo)
    private photoEntiryRepo: Repository<Photo>
  ) {}

  @Get()
  getHello(): string {
    return this.photoService.getList();
  }

  @Get('/list')
  async getInfo(): Promise<any> {
    // const photo = new Photo();
    // photo.name = 'kenan';
    // photo.description = 'demo desp';
    // photo.filename = '';
    // photo.url = '';
    // photo.views = 1;
    // photo.isPublished = true;


    let res = await this.photoEntiryRepo.find();
    console.log(res)
    return res
  }
}
