import { Module } from "@nestjs/common";
import { UploadController } from './index.controller'
import { UploadService } from "./index.service";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "node:path";

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './public/upload', // 设置文件存储路径
        filename: (req, file, cb) => {
          // 自定义文件名，可以根据需要生成唯一的文件名
          const randomName = Array(32).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join('');
          const originalName = file.originalname;
          const fileFormat = extname(originalName);
          const date = new Date().toISOString().replace(/[-:]/g, ''); // 移除日期中的短横线和冒号
          // 保留原始文件名并在其后添加日期
          // cb(null, `${originalName.slice(0, -fileFormat.length)}-${date}${fileFormat}`);
          cb(null, `${originalName}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        // 限制文件类型
        if (file.mimetype.match('image/jpeg') || file.mimetype.match('image/png')) {
          cb(null, true);
        } else {
          cb(new Error('Invalid file type'), false);
        }
      },
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService]
})
export class UploadModule {

}