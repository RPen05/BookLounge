import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as cron from 'node-cron';
import { Book } from 'src/models/book.entity';
import { BookParserService } from 'src/services/book-parser.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookParserService],
})
export class ParserModule implements OnModuleInit {
  constructor(private readonly bookParserService: BookParserService) {}

  onModuleInit() {
    this.bookParserService.parseBook();

    cron.schedule('0 0 * * *', () => {
      this.bookParserService.parseBook();
    });
  }
}
