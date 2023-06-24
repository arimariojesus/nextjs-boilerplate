import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render hello world title', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /hello world/i })
    ).toBeInTheDocument();
  });
});
