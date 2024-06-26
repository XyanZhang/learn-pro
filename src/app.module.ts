import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DatabaseModule from './modules/database/database.module';
import { PhotoModule } from './modules/photo/index.module';

@Module({
  imports: [DatabaseModule, PhotoModule],
  controllers: [AppController],
  providers: [
    AppService,
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
export class AppModule {}
