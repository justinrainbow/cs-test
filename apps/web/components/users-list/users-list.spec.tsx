import { act, render } from '@testing-library/react';

import UsersList from './users-list';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: [], total: 0 }),
  })
) as jest.Mock;

describe('UsersList', () => {
  it('should render successfully', () =>
    act(() => {
      const { baseElement } = render(<UsersList />);
      expect(baseElement).toBeTruthy();
    }));
});
