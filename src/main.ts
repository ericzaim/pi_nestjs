import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let PORT=3001;
  await app.listen(PORT);
  console.log(`Servidor Rodando na porta ${PORT}`)
  
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true, 
    forbidNonWhitelisted: true, 
  }));
}
bootstrap();
