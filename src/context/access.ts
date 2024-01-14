import type { ApiKey } from './DbType.js';
import type { UserWithMembership } from './TType.js';


export type UserAccess = {
  readonly type: 'user';
  readonly user: UserWithMembership;
};

export type ClientAppAccess = {
  readonly type: 'client';
  readonly key: ApiKey;
};

export type PublicAccess = {
  readonly type: 'public';
};


export type Access = UserAccess | ClientAppAccess | PublicAccess;

export const isUser = (access: Access): access is UserAccess => access.type === 'user';
export const isClient = (access: Access): access is ClientAppAccess => access.type === 'client';
export const isPublic = (access: Access): access is PublicAccess => access.type === 'public';
