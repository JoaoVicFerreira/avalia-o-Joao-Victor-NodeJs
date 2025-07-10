import 'reflect-metadata';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column({ type: 'varchar', length: 240 })
  content!: string;
  @ManyToOne(() => User)
  user!: User;
  @CreateDateColumn()
  created_at!: Date;
}
