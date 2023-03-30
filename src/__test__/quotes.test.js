import React from 'react';
import { render } from '@testing-library/react';
import RandomQuote from '../components/quotes';

describe('RandomQuote component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<RandomQuote />);
    expect(asFragment()).toMatchSnapshot();
  });
});
