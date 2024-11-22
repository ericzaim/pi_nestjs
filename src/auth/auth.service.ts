import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService,
      ) {}
      async validaEmail(email: string) {
        const user = await this.usersService.findOneByEmail(email);
        if (user) {
          return user;
        }
        return null;
      }
      async validaSenha(senha: string) {
        const user = await this.usersService.findOneByEmail(senha);
        if (user && bcrypt.compareSync(senha, user.senha)) {
          return user;
        }
        return null;
      }
      async login(user: { email: string; id: number }) {
        const payload = { email: user.email, id: user.id };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
    
}
