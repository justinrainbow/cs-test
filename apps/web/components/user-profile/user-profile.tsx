'use client';

import type { UserWithFriends } from '@cs-test/db';
import { Avatar, AvatarGroup, Card, Divider } from '@nextui-org/react';
import useSWR from 'swr';

export interface UserProfileProps {
  userId: number;
}

const fetcher = (url: string) =>
  fetch(url).then((res): Promise<{data:UserWithFriends}> => res.json());

function useUser(userId: number) {
  return useSWR(`/api/users/${userId}`, fetcher);
}

export default function UserProfile({ userId }: UserProfileProps) {
  const { data, error } = useUser(userId);

  if (!data) {
    return <h1>User not found</h1>;
  }

  const user = data.data;

  return (
    <div className="flex flex-col justify-items-start gap-8">
      <Card className="flex flex-col justify-items-stretch items-center p-4 gap-4 w-full">
        <Avatar src={user.photo} size="lg" className="w-56 h-56" />

        <div className="flex flex-col gap-4">
          <h1 className="text-ellipsis text-left text-3xl">
            {user.firstName} {user.lastName}
          </h1>
          {/* <p>{user.email}</p> */}
        </div>
      </Card>

      <Divider orientation="horizontal" />

      <Card className="flex flex-col justify-items-stretch items-start p-4 gap-8 w-full">
        <h2 className="text-2xl">Friends</h2>
        {user.friends?.length ? (
          <AvatarGroup>
            {user.friends.map((friend) => (
              <Avatar key={friend.id} src={friend.photo} size="lg" />
            ))}
          </AvatarGroup>
        ) : (
          <p>No friends... yet?</p>
        )}
      </Card>
    </div>
  );
}
