import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { Book } from 'src/models/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookParserService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}
  async parseBook(): Promise<Book[]> {
    const books: Book[] = [];
    const maxPages = await this.parseMaxPages();

    for (let page = 1; page <= maxPages; page++) {
      const responce = await axios.get(
        `https://www.labirint.ru/genres/1852/?page=${page}`,
      );
      console.log(`Parsing page ${page}...`);

      if (responce.status === 200) {
        const $ = cheerio.load(responce.data);

        // Парсинг с раздела "Все книги жанра"
        const promises = $('.genres-catalog .genres-carousel__item').map(
          async (index, element) => {
            const title = $(element).find('.product-title').text().trim();

            const authorElement = $(element).find('.product-author a span');
            const author = authorElement.length
              ? authorElement.text().trim()
              : 'Не указан';

            const image_cover = $(element)
              .find('.product-cover img')
              .attr('data-src');

            const price_string = $(element)
              .find('.price-val span')
              .text()
              .trim()
              .replace(/[^\d]/g, '');
            const price = parseInt(price_string, 10);

            const old_price_string = $(element)
              .find('.price-gray')
              .text()
              .trim()
              .replace(/[^\d]/g, '');
            const old_price = parseInt(old_price_string, 10);

            const publisher = $(element)
              .find('.product-pubhouse a.product-pubhouse__pubhouse span')
              .text()
              .trim();

            const series = $(element)
              .find('a.product-pubhouse__series span')
              .text()
              .trim();

            const book_id_item = $(element).find('.product');
            const book_id_text = book_id_item.attr('data-product-id');
            const book_id = parseInt(book_id_text, 10);

            // TODO не у всех книг есть эти поля
            const size = '';

            const weight = null;

            const age_restriction = '';

            const genre = '';

            const pub_year = null;

            // TODO найти данные на странице
            const pages = null;
            const circulation = '';

            const existingBook = await this.bookRepository.findOne({
              where: { title },
            });

            if (existingBook) {
              existingBook.title = title;
              existingBook.author = author;
              existingBook.image_cover = image_cover;
              if (!isNaN(price)) {
                existingBook.price = price;
              } else {
                existingBook.price = null;
              }
              if (!isNaN(old_price)) {
                existingBook.old_price = old_price;
              } else {
                existingBook.old_price = null;
              }
              existingBook.publisher = publisher;
              existingBook.series = series;
              existingBook.pub_year = pub_year;
              existingBook.pages = pages;
              existingBook.size = size;
              existingBook.circulation = circulation;
              existingBook.weight = weight;
              existingBook.age_restriction = age_restriction;
              if (!isNaN(book_id)) {
                existingBook.book_id = book_id;
              } else {
                existingBook.book_id = null;
              }
              existingBook.genre = genre;

              await this.parseAdditionalInfoBook(
                existingBook,
                `https://www.labirint.ru/books/${book_id}`,
              );

              return this.bookRepository.save(existingBook);
            } else {
              const newBook = new Book();
              newBook.title = title;
              newBook.author = author;
              newBook.image_cover = image_cover;
              if (!isNaN(price)) {
                newBook.price = price;
              } else {
                newBook.price = null;
              }
              if (!isNaN(old_price)) {
                newBook.old_price = old_price;
              } else {
                newBook.old_price = null;
              }
              newBook.publisher = publisher;
              newBook.series = series;
              newBook.pub_year = pub_year;
              newBook.pages = pages;
              newBook.size = size;
              newBook.circulation = circulation;
              newBook.weight = weight;
              newBook.age_restriction = age_restriction;
              if (!isNaN(book_id)) {
                newBook.book_id = book_id;
              } else {
                newBook.book_id = null;
              }
              newBook.genre = genre;

              await this.parseAdditionalInfoBook(
                newBook,
                `https://www.labirint.ru/books/${book_id}`,
              );

              books.push(newBook);

              return this.bookRepository.save(newBook);
            }
          },
        );

        await Promise.all(promises);
      }
    }
    console.log('Parsing ended successfully');
    return books;
  }

  async parseMaxPages(): Promise<number> {
    const response = await axios.get('https://www.labirint.ru/genres/1852/');
    if (response.status === 200) {
      const $ = cheerio.load(response.data);

      const paginationRightElement = $('.pagination-number__right');
      const pageNumberElement = paginationRightElement.find(
        'a.pagination-number__text',
      );
      const maxPagesText = pageNumberElement.eq(-1).text(); // Выбирает последний элемент
      const maxPages = parseInt(maxPagesText, 10) || 1;

      return maxPages || 1;
    }
    return 1;
  }

  async parseAdditionalInfoBook(book: Book, bookURL: string) {
    const responce = await axios.get(bookURL);

    if (responce.status === 200) {
      const $ = cheerio.load(responce.data);

      const isbn = $('.isbn').text().replace('ISBN: ', '').trim();

      const weight_text = $('.weight')
        .text()
        .replace('Масса: ', '')
        .replace(' г', '')
        .trim();
      const weightInt = parseInt(weight_text, 10);

      const size = $('.dimensions')
        .text()
        .replace('Размеры: ', '')
        .replace(' мм', '')
        .trim();

      const age_restriction = $('#age_dopusk').text().trim();

      const genre = $('.genre a').text().trim();

      const description = $('#product-about p').text().trim();

      const year_text = $('.publisher').text().match(/\d{4}/); // Используем регулярное выражение для поиска четырёхзначных чисел (годов)
      const pub_year_int = parseInt(year_text[0]);

      let pages_int;
      const pages_element = $('.pages2');
      if (pages_element.length > 0) {
        const pages_string = pages_element.text().match(/\d+/);
        pages_int = parseInt(pages_string[0], 10);
      }

      book.isbn = isbn;
      if (!isNaN(weightInt)) {
        book.weight = weightInt;
      } else {
        book.weight = null;
      }
      book.size = size;
      book.age_restriction = age_restriction;
      book.description = description;
      book.genre = genre;
      if (!isNaN(pub_year_int)) {
        book.pub_year = pub_year_int;
      } else {
        book.pub_year = null;
      }
      // TODO
      if (!isNaN(pages_int) && pages_int && pages_int[0]) {
        book.pages = pages_int;
      } else {
        book.pages = null;
      }

      await this.bookRepository.save(book);
    }
  }
}
