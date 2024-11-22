import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}