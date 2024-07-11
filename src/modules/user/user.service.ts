import { Injectable } from "@nestjs/common";
import User from "src/entity/user.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private entityRepo: Repository<User>
  ) {
  }

  getHello() {
    return 'hello'
  }

  async save(data) {
    const user = new User();
    user.email = data.email;
    user.nickName = data.nickName;
    user.pwd = data.pwd;
    user.mobile = ''+data.mobile;
    let res = await this.entityRepo.save(user)
    return res
  }
}