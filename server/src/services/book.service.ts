import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from 'src/models/books.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Books)
    private readonly bookRepository: Repository<Books>,
  ) {}

  async findAll(page: number, limit: number): Promise<Books[]> {
    const skip = (page - 1) * limit;
    return this.bookRepository.find({ skip, take: limit });
  }

  // async findDiscountBooks(page: number, limit: number): Promise<Books[]> {
  //   return this.bookRepository.find({
  //     where: { old_price: null },
  //     skip: (page - 1) * limit, // Пропускаем записи для пагинации
  //     take: limit, // Возвращаем только определенное количество записей
  //   });
  // }
}
