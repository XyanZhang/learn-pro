import { Body, Controller, Get, Inject, Param, Post, Query } from "@nestjs/common";
import User from "src/entity/user.entity";
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {
  }
  @Get("/:id")
  async getDetail(@Param() param) {
    // console.log(param);
    let res = await this.userService.detail(+param.id)
    return res
  }

  @Post('/save')
  async save(@Body() data) {
    let res = await this.userService.save(data)
    return res
  }
}