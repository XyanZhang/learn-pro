import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { PhotoModule } from './modules/photo/index.module';
import { UploadModule } from './modules/upload/index.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpCustomException } from './filter/http.filter';
import { UnloginFilter } from './filter/unlogin.filter';
import { LogMiddleware } from './middleware/log.middleware';
import { ResponseInterceptor } from './interceptor/response.interceptor';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [DatabaseModule, PhotoModule, UploadModule, UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpCustomException // Nest 会把所有 token 为 APP_FILTER 的 provider 注册为全局 Exception Filter。
    },
    {
      provide: APP_FILTER,
      useClass: UnloginFilter
    },
    // 其余的全局 Guard、Interceptor、Pipe 也是这样注册：
    {
      provide: 'valueProvider',
      useValue: {
        name: 'valueProviderName',
      },
    },
    {
      provide: 'factoryProvider',
      useFactory(appService: AppService) {
        return appService.getDesp();
      },
      inject: [AppService], // 使用useFactory 需要inject
    },
  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('*')
  }
}