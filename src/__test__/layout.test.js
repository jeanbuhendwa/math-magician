import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../components/Layout';

describe('Layout', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
