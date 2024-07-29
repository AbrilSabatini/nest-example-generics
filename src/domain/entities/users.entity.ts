import { Base } from 'src/common/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class User extends Base {
  @Column({
    unique: true,
  })
  username: string;

  @Column()
  password: string;

  @Column()
  authStrategy: string;
}
