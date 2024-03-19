import { Card } from '@nextui-org/react';
import UsersList, {
  UsersListLoading,
  UsersListError,
} from '../components/users-list/users-list';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { getUsers } from '@cs-test/db';
import { SWRProvider } from './swr-provider';

export default async function Index() {
  const users = await getUsers();

  return (
    <SWRProvider
      fallback={{
        '/api/users?page=0&limit=10&delay=5000': {
          data: users,
          total: users.length,
        },
      }}
    >
      <div className="flex flex-col w-full justify-items-stretch gap-4 py-8 md:py-10">
        <div
          className="inline-block max-w-lg text-center justify-center"
          id="welcome"
        >
          <h1>
            <span> Hello there, </span>
            Welcome 👋
          </h1>
        </div>
        <Card className="p-3 flex flex-col w-full gap-4">
          <ErrorBoundary fallback={<UsersListError />}>
            <Suspense fallback={<UsersListLoading />}>
              <UsersList />
            </Suspense>
          </ErrorBoundary>
        </Card>
      </div>
    </SWRProvider>
  );
}
