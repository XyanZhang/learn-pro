import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => this.transformResponse(data))
    );
  }

  private transformResponse(data: any) {
    // 这里可以定义你的响应格式
    return {
      code: 200,
      message: 'Success',
      data: data,
    };
  }
}