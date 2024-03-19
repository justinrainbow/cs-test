import type { NextRequest } from 'next/server';
import { wait } from '../utils';
import { getUsers } from '@cs-test/db';

const DEFAULT_DELAY = 2000;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const delay = Number(searchParams.get('delay') ?? DEFAULT_DELAY);
  const skip = Number(searchParams.get('skip') ?? 0);
  const limit = Number(searchParams.get('limit') ?? 10);

  if (delay > 0) {
    await wait(delay);
  }

  const allUsers = await getUsers();

  return Response.json({
    data: allUsers.slice(skip, skip + limit),
    total: allUsers.length,
  });
}
