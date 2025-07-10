import 'reflect-metadata';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column({ type: 'varchar', length: 240 })
  content!: string;
  @CreateDateColumn()
  created_at!: Date;
  @ManyToOne(() => User)
  user!: User;

}