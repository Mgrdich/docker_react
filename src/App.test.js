import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('some other test', () => {
  expect(1).toBe(1);
});


test('some other third test', () => {
  expect(2).toBe(2);
});


test('some other forth test', () => {
  expect(3).toBe(3);
});
