import { Injectable } from "@nestjs/common";
import User from "src/entity/user.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataBaseException } from "src/filter/database.filter";
import { HttpCustomException } from "src/filter/http.filter";
import { DataException } from "src/filter/data.filter";

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

  async findByQuery(where) {
    let res;
    try {
      res = await this.entityRepo.findOne({
        where: where
      })
    } catch (error) {
      throw new DataBaseException(error);
    }
    return res;
  }

  async detail(id: any) {
    let one = await this.findByQuery({
      id
    })
    return one;
  }

  async save(data) {

    let isExist = await this.findByQuery({
      mobile: data.mobile
    })
    console.log(isExist)
    if(isExist) {
      throw new DataException('已存在');
      return 
    }
    console.log(1)
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