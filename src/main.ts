import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

   // 使用 Express 静态中间件
   app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(12333);
}
bootstrap();
