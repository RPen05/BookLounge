import { Controller, Get } from '@nestjs/common';
import { BookParserService } from 'src/service/book-parser.service';
import { Book } from './book.entity';

@Controller('books')
export class ParseBookController {
  constructor(private readonly bookParserService: BookParserService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookParserService.parseBook();
  }
}
