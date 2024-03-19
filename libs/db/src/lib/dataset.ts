export interface User {
  id: number;
  firstName: string;
  lastName: string;
  photo: string;
  friends: number[];
}

export const users: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    photo: 'https://i.pravatar.cc/150?img=66',
    friends: [2, 3],
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    photo: 'https://i.pravatar.cc/150?img=10',
    friends: [1],
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Doe',
    photo: 'https://i.pravatar.cc/150?img=5',
    friends: [1],
  },
  {
    id: 4,
    firstName: 'Bob',
    lastName: 'Dole',
    photo: 'https://i.pravatar.cc/150?img=7',
    friends: [],
  },
] as const;
