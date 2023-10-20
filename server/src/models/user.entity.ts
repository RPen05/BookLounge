import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number; // id пользователя

  @Column({ unique: true })
  phone_number: string; // уникальный номер телефона

  @Column({ default: 0 })
  loginAttempts: number; // TODO количество попыток входа

  @Column({ default: false })
  isLocked: boolean; // TODO проверка блокировки входа на некоторое время
}
