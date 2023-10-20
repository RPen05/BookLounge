import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthController } from './models/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { JwtAuthService } from './jwt/jwt.service';

// Настройка .env файла
dotenv.config();

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [JwtAuthService],
})
export class AppModule {}
