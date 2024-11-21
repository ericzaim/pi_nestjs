import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createCadastro(): string {
    return 'Cadastro feito com sucesso';
  }
}
