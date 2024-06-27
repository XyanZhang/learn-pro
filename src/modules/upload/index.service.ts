import { Injectable } from "@nestjs/common";

@Injectable()
export class UploadService {
  getList(): string {
    // return 'Hello World!';
    return 'ok'
  }

  getDesp(): string {
    return 'get description'
  }
}
