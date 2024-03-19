import { getUser } from '@cs-test/db';
import UserProfile from '../../../components/user-profile/user-profile';
import { SWRProvider } from '../../swr-provider';

/* eslint-disable-next-line */
export interface IdProps {
  params: {
    id: string;
  };
}

export default async function Id({ params }: IdProps) {
  const userId = +params.id;

  const user = await getUser(userId);

  if (!user) {
    return <h1>User not found</h1>;
  }

  return (
    <SWRProvider fallback={{ [`/api/users/${userId}`]: { data: user } }}>
      <UserProfile userId={userId} />
    </SWRProvider>
  );
}
