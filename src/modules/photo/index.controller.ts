import { Body, Controller, Get, Inject, Param, Post, Query } from '@nestjs/common';
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
    let res = await this.photoEntiryRepo.find();
    return res
  }
  @Get('/detail')
  async getDetail(@Query('id') id): Promise<any> {
    let res = await this.photoEntiryRepo.findOne({
      where: { id: id }
    });
    return res || []
  }
  @Post('/save')
  async savePhone(@Body() data) {
    console.log(data)
    const photo = new Photo();
    photo.title = data.title;
    photo.description = data.description
    photo.filename = '';
    photo.url = data.url;
    photo.views = 1;
    photo.isPublished = true;

    let res = await this.photoEntiryRepo.save(photo)
    return res
  }
}
