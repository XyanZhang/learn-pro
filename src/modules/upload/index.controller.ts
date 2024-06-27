import { Body, Controller, FileTypeValidator, Get, Inject, MaxFileSizeValidator, Param, ParseFilePipe, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadService } from './index.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { extname } from 'path';

@Controller('upload')
export class UploadController {
  constructor(
    private readonly UploadService: UploadService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile(
    // new ParseFilePipe({
    //   validators: [
    //   new MaxFileSizeValidator({ maxSize: 1000 }),
    //     new FileTypeValidator({ fileType: 'image/jpeg' }),
    //   ],
    // }),
  ) file: Express.Multer.File) {
     return { success: file };
  }
}
