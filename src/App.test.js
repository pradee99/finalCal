import { render, screen } from '@testing-library/react';
import CalculatorLayout from '../src/components/organisms/CalculatorLayout';


test('displays 0 initially', async () => {
  render(<CalculatorLayout />);
  const displayElement = await screen.findByTestId("display");
  expect(displayElement).toHaveTextContent("0");
});


