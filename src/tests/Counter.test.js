// import necessary react testing library helpers here
// import the Counter component here
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Counter from '../components/Counter';


beforeEach(() => {
  // Render the Counter component before each test
  render(<Counter />);
});

test('renders counter message', () => {
  // Check if the Counter component renders the "Counter" message
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Check if the initial count is 0
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Find the increment button and click it
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  
  // Check if the count has been incremented
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Test if the decrement button decrements the count
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton); // Increment to 1

  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton); // decrement back to 0

  // Check if the count has been decremented back to 0
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});
