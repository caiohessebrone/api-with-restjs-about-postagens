import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Testando variavel de ambiente ${process.env.APP_NAME}`;
  }
}
