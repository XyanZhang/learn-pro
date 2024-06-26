import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;
  
  @Column()
  url: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;
}
