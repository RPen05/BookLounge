import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { JwtAuthService } from 'src/jwt/jwt.service';
import { AuthController } from 'src/models/auth.controller';
import { ParseBookController } from 'src/models/book-parser.controller';
import { BookController } from 'src/models/book.controller';
import { Book } from 'src/models/book.entity';
import { User } from 'src/models/user.entity';
import { BookParserService } from 'src/service/book-parser.service';
import { BookService } from 'src/service/book.service';

// Настройка .env файла
dotenv.config();

@Module({
  imports: [
    // Конфигурация подключения к базе данных PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Book],
      synchronize: true,
    }),

    // Подключение сущности User
    TypeOrmModule.forFeature([User, Book]),

    // Регистрация JWT-токена
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '3d' }, // токен истекает через 3 дня
    }),
  ],
  controllers: [AuthController, ParseBookController, BookController],
  exports: [TypeOrmModule],
  providers: [JwtAuthService, BookParserService, BookService],
})
export class DatabaseModule {}
