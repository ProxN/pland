import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateWorkspace {
  @Field()
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string;
}
