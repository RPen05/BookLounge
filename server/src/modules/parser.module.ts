import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as cron from 'node-cron';
import { BookDetails } from 'src/models/book-details.entity';
import { Books } from 'src/models/books.entity';
import { LabirintBookParserService } from 'src/services/labirint-parser.service';

@Module({
  imports: [TypeOrmModule.forFeature([Books, BookDetails])],
  providers: [LabirintBookParserService],
})
export class ParserModule implements OnModuleInit {
  constructor(private readonly bookParserService: LabirintBookParserService) {}

  onModuleInit() {
    this.bookParserService.parseLabirintBook();

    cron.schedule('0 0 * * *', () => {
      this.bookParserService.parseLabirintBook();
    });
  }
}
