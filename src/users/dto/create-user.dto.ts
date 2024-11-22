import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  name: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @IsNotEmpty({ message: 'Senha é obrigatória' })

  @IsStrongPassword(
    { minLength: 8, minNumbers: 1, minUppercase: 1, minSymbols: 1 }, // configuração da senha forte (opcional)
    { message: 'Senha fraca' },
  )
  senha: string;
}