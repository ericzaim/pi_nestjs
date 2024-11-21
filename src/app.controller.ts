import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("cadastro")
  PostCadastro(): string {
    return this.appService.createCadastro();
  }
}
