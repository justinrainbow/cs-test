import { getUser } from '@cs-test/db';
import type { NextRequest } from 'next/server';
import { wait } from '../../utils';

const DEFAULT_DELAY = 2000;

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const searchParams = request.nextUrl.searchParams;

  const delay = Number(searchParams.get('delay') ?? DEFAULT_DELAY);
  const userId = Number(params.id);

  if (delay > 0) {
    await wait(delay);
  }

  const user = await getUser(userId);

  if (!user) {
    return Response.json({ error: 'User not found' }, { status: 404 });
  }

  return Response.json({ data: user });
}
