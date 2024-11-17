import React from 'react';
import { render, screen } from '@testing-library/react';
import AppModule from './App';

test('renders learn react link', () => {
  render(<AppModule />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
