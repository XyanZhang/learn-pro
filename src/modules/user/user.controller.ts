import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import User from "src/entity/user.entity";
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {
  }
  @Get()
  getHello() {
    return 'hello'
  }

  @Post('/save')
  async save(@Body() data) {
    let res = await this.userService.save(data)
    return res
  }
}