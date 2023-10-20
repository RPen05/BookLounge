import { Controller, Get } from '@nestjs/common';
import { BookService } from 'src/service/book.service';
import { Book } from './book.entity';

@Controller('get-book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }
}

// TODO пагинация и лоадер
