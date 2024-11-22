import { Body, Post,Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}


    @Post('login')
    async login (@Body()body:{email: string; senha: string}){
        if(!body.email || !body.senha){
            return {message: 'Informe email e senha para efetuar o login'};
        }
        const user = await this.authService.validaEmail(body.email);
        if(user){
            const vSenha = await this.authService.validaSenha(body.senha);
            if(vSenha){
            return this.authService.login(user);
            }
            return {message:'Senha inválida'}
        }
        return {message:'Usuário inválido'}
    }
}
