import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  image_cover: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  old_price: number;

  @Column()
  publisher: string;

  @Column()
  series: string;

  @Column({ nullable: true })
  pub_year: number;

  @Column()
  isbn: string;

  @Column({ nullable: true, default: 384 })
  pages: number;

  @Column()
  size: string;

  @Column()
  circulation: string;

  @Column({ nullable: true })
  weight: number;

  @Column()
  age_restriction: string;

  @Column({ nullable: true })
  book_id: number;

  @Column()
  genre: string;

  @Column()
  description: string;
}
