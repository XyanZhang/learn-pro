import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

export class DataException{
  message: string;

  constructor(message?){
    this.message = message;
  }
}

@Catch(DataException)
export class DataExceptionFilter implements ExceptionFilter {
  catch(exception: DataException, host: ArgumentsHost) {
    console.log()
    const response = host.switchToHttp().getResponse<Response>();
    const request = host.switchToHttp().getRequest();
    const status = HttpStatus.CONFLICT;
    console.log(status, exception)
    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
    };

    response.status(status).json(errorResponse);
  }
}
