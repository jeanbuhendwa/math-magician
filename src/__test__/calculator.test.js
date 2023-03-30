import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('Calculator', () => {
  it('should display 0 as default value', () => {
    const { container } = render(<Calculator />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display the correct value when a number button is clicked', () => {
    const { container, getByText } = render(<Calculator />);
    const buttonTwo = getByText('2');
    fireEvent.click(buttonTwo);
    expect(container.firstChild).toMatchSnapshot();
  });
});
