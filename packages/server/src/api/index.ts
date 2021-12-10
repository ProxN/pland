import userEntity from './user/user-entity';
import workspaceEntity from './workspace/workspace-entity';
import authResolver from './auth/auth-resolver';
import userResolver from './user/user-resolver';
import workspaceResolver from './workspace/workspace-resolver';

export const entities = [userEntity, workspaceEntity];
export const resolvers = [
  authResolver,
  userResolver,
  workspaceResolver,
] as const;
