import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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

  @Column({
    unique: true,
  })
  mobile: string;

  @Column()
  email: string;
  
  @Column({
    nullable: true,
  })
  idCard: string;

  @Column()
  pwd: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  registrationDate: Date;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'create_time',
    nullable: true,
  })
  createTime: string

  @UpdateDateColumn ({
    type: 'timestamp',
    name: 'update_time',
    nullable: true,
  })
  updateTime: string
}
