import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';

export class DataBaseException{
  message: string;

  constructor(error?){
    console.log(error)
    this.message = error?.sqlMessage;
  }
}


@Catch(DataBaseException)
export class TypeOrmExceptionFilter implements ExceptionFilter {
  catch(exception: DataBaseException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = HttpStatus.INTERNAL_SERVER_ERROR;
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: ctx.getRequest().url,
      message: exception?.message || 'Database query failed',
    });
  }
}