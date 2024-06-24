import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
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
        return appService.getDesp()
      },
      inject: [AppService] // 使用useFactory 需要inject
    }
  ],
})
export class AppModule {}
