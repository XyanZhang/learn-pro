import { Injectable } from "@nestjs/common";
import User from "src/entity/user.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataBaseException } from "src/filter/database.filter";

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
    let res = null
    try {
      res = await this.entityRepo.save(user)
    } catch (error) {
      throw new DataBaseException(error);
    }
    return res
  }
}