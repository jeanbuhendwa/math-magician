import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/NavBar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
