import { Field, ObjectType } from 'type-graphql';
import { ErrorResponse } from '../shared';
import Workspace from '../../api/workspace/workspace-entity';

@ObjectType()
export class WorkspaceResponse extends ErrorResponse {
  @Field(() => Workspace, { nullable: true })
  workspace?: Workspace;
}
