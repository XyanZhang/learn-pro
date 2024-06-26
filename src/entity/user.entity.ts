import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  realName: string;

  @Column()
  mobile: string;

  @Column()
  email: string;
  
  @Column()
  idCard: string;

  @Column()
  pwd: string;

}
