'use client';

import type { User as UserDoc } from '@cs-test/db';
import { User } from '@nextui-org/react';
import Link from 'next/link';
import useSWR from 'swr';

/* eslint-disable-next-line */
export interface UsersListProps {
  limit?: number;
  page?: number;
  delay?: number;
}

const fetcher = (url: string) =>
  fetch(url).then(
    (res): Promise<{ data: UserDoc[]; total: number }> => res.json()
  );

const useUsers = ({ page, limit, delay }: Required<UsersListProps>) => {
  const { data, error } = useSWR(
    `/api/users?page=${page}&limit=${limit}&delay=${delay}`,
    fetcher,
    { suspense: true }
  );

  const users = data?.data ?? [];
  const totalUsers = data?.total ?? 0;

  return { users, totalUsers, error, isLoading: !users && !error };
};

export function UsersListLoading() {
  return <div>Loading users...</div>;
}

export function UsersListError() {
  return <div>Error loading users</div>;
}

export function UsersList({
  limit = 10,
  page = 0,
  delay = 5000,
}: UsersListProps) {
  const { users, error, isLoading } = useUsers({ page, limit, delay });

  if (error) {
    return <div>Error loading users</div>;
  }

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  return (
    <>
      {users?.map((user: any) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <User
            name={[user.firstName, user.lastName].join(' ')}
            avatarProps={{
              src: user.photo,
              size: 'lg',
            }}
          />
        </Link>
      ))}
    </>
  );
}

export default UsersList;
