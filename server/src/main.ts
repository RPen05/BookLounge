import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as session from 'express-session';

// Настройка .env файла
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Создание сессии
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    }),
  );

  // Настройка CORS
  app.enableCors({
    origin: 'http://localhost:5173', // подключение к Frontend части проекта
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
