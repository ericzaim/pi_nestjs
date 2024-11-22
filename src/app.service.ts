import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  Home(): string {
    return 'Tela de cadastro';
  }
}
