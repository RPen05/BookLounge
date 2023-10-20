import { Controller, Get } from '@nestjs/common';
import { BookService } from 'src/services/book.service';
import { Book } from '../models/book.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('get-books')
@ApiTags('Books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('all')
  @ApiOperation({ summary: 'Получить все книги из базы данных' })
  @ApiResponse({ status: 200, description: 'Успешный запрос', type: [Book] })
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }
}

// TODO Pagination and Loader
