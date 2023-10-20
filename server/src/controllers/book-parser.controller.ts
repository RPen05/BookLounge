import { Controller, Get } from '@nestjs/common';
import { BookParserService } from 'src/services/book-parser.service';
import { Book } from '../models/book.entity';

@Controller('books')
export class ParseBookController {
  constructor(private readonly bookParserService: BookParserService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookParserService.parseBook();
  }
}
