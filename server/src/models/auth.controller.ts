import {
  Controller,
  Post,
  Body,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { JwtAuthService } from 'src/jwt/jwt.service';

// Создание контроллера для получения запросов для авторизации пользователя в системе
@Controller('auth')
export class AuthController {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtAuthService: JwtAuthService,
  ) {}

  private readonly confirmationCode = process.env.CONFIRMATION_CODE;

  // Post запрос для получения номера телефона при авторизации и его сохранение для дальнейших действий
  @Post('phone')
  async sendPhoneNumber(@Body() requestBody, @Request() req) {
    const { phoneNumber } = requestBody;

    req.session.phoneNumber = phoneNumber;

    return { success: true };
  }

  // TODO Swagger / Class Validator for DTO /

  // Post запрос для получения кода подтверждения и его сравнения с заглушкой через env файл
  @Post('verify-code')
  async verifyConfirmationCode(@Body() requestBody, @Request() req) {
    const { code } = requestBody;
    const userPhoneNumber = req.session.phoneNumber;

    // Проверка, совпадает ли код подтверждения с кодом из env файла
    if (code === this.confirmationCode) {
      try {
        const user = new User();
        const payload = { phoneNumber: userPhoneNumber };

        user.phone_number = userPhoneNumber;

        // Присвоение JWT-токена пользователю
        const token = await this.jwtAuthService.generateToken(payload);

        // Сохранение пользователя в базе данных
        await this.userRepository.save(user);

        return { success: true, token };
      } catch (error) {
        throw new UnauthorizedException('Error creating JWT');
      }
    } else {
      throw new UnauthorizedException('Invalid Code');
    }
  }
}
