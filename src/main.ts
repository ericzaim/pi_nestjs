import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let PORT;
  await app.listen(PORT = process.env.PORT ?? 3000);

  console.log(`Servidor Rodando na porta ${PORT}`)
}
bootstrap();
