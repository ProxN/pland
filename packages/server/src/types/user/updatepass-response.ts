import { Field, ObjectType } from 'type-graphql';
import { ErrorResponse } from '../shared';

@ObjectType()
export class UpdatePassResponse extends ErrorResponse {
  @Field(() => Boolean, { nullable: true, defaultValue: false })
  updated?: boolean;
}
