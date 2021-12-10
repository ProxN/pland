import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import User from '../user/user-entity';

@ObjectType()
@Entity()
class Workspace extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  workspace_id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  owner_id!: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text' })
  description?: string;

  @ManyToOne(() => User, (user) => user.owned_workspaces)
  @JoinColumn({ name: 'owner_id' })
  owner!: User;

  @Field(() => String, { nullable: true })
  @UpdateDateColumn()
  updatedAt?: Date;

  @Field(() => String, { nullable: true })
  @CreateDateColumn()
  createdAt?: Date;
}

export default Workspace;
