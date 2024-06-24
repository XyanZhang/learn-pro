import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject('valueProvider')
  private valueService: AppService

  @Inject('factoryProvider')
  private factoryService;

  @Get()
  getHello(): string {
    console.log(this.valueService)
    console.log(this.factoryService)
    return this.appService.getHello();
  }
}
