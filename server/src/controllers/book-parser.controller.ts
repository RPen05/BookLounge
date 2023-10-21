import { Controller, Get } from '@nestjs/common';
import { LabirintBookParserService } from 'src/services/labirint-parser.service';
import { Books } from '../models/books.entity';

@Controller('books')
export class ParseBookController {
  constructor(
    private readonly labirintBookParserService: LabirintBookParserService,
  ) {}

  @Get()
  async findAll(): Promise<Books[]> {
    return this.labirintBookParserService.parseLabirintBook();
  }
}
