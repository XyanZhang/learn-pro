import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  title: string;
  
  @Column({
    type: 'varchar',
    nullable: true, // 设置字段为非必填
    length: 20 
  })
  shortTitle: string;

  @Column('text')
  description: string;


  @Column()
  filename: string;
  
  @Column()
  url: string;

  @Column({
    type: 'int',
    nullable: true // 设置字段为非必填
  })
  views: number;

  @Column({
    type: "boolean",
    nullable: true // 设置字段为非必填
  })
  isPublished: boolean;
}
