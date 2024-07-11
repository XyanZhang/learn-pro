import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500, nullable: true, })
  username: string;

  @Column({
    name: 'nick_name',
    nullable: true,
  })
  nickName: string;

  @Column()
  mobile: string;

  @Column()
  email: string;
  
  @Column({
    nullable: true,
  })
  idCard: string;

  @Column()
  pwd: string;

  @Column({
    type: 'bigint',
    name: 'registration_date',
    nullable: true,
  })
  registrationDate: string

}
