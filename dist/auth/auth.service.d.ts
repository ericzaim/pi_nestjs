import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private jwtService;
    private usersService;
    constructor(jwtService: JwtService, usersService: UsersService);
    validaEmail(email: string): Promise<import("../users/entities/user.entity").User>;
    validaSenha(senha: string): Promise<import("../users/entities/user.entity").User>;
    login(user: {
        email: string;
        id: number;
    }): Promise<{
        access_token: string;
    }>;
}
