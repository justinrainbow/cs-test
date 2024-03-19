import type { User } from './dataset';

export type { User };
export type UserWithFriends = Omit<User, 'friends'> & { friends: User[] };

export async function getUsers(): Promise<User[]> {
  return import('./dataset').then((module) => module.users);
}

const findUser = <T extends { id: number }>(users: T[], id: number) =>
  users.find((user) => user.id === id);

export async function getUser(id: number): Promise<UserWithFriends | null> {
  const users = await getUsers();
  const user = findUser(users, id);

  if (!user) {
    return null;
  }

  const friends = user.friends
    .map((friendId) => findUser(users, friendId))
    .filter((value): value is User => value !== undefined);

  return {
    ...user,
    friends,
  };
}
