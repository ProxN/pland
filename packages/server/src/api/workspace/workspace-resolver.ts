import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql';
import Workspace from './workspace-entity';
import { checkEmpty } from '../../lib/helpers';
import { CreateWorkspace, WorkspaceResponse } from '../../types/workspace';
import { FieldError } from '../../types/shared';
import { Context } from '../../types/context';

@Resolver()
class WorkspaceResolver {
  @Authorized()
  @Mutation(() => WorkspaceResponse)
  async createWorkspace(
    @Arg('body') body: CreateWorkspace,
    @Ctx() { req }: Context
  ): Promise<WorkspaceResponse> {
    const { description, name } = body;
    const error: FieldError = checkEmpty({ name });

    if (error.message) {
      return { error };
    }

    const workspace = await Workspace.create({
      name,
      description,
      owner_id: req.session.userId,
    }).save();

    return { workspace };
  }
}

export default WorkspaceResolver;
