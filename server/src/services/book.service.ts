import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from 'src/models/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async findAll(page: number, limit: number): Promise<Book[]> {
    const skip = (page - 1) * limit;
    return this.bookRepository.find({ skip, take: limit });
  }

  async findDiscountBooks(page: number, limit: number): Promise<Book[]> {
    return this.bookRepository.find({
      where: { old_price: null },
      skip: (page - 1) * limit, // Пропускаем записи для пагинации
      take: limit, // Возвращаем только определенное количество записей
    });
  }
}
