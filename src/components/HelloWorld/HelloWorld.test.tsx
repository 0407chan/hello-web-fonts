import { render, screen } from '@testing-library/react';
import React from 'react';
import HelloWorld from './HelloWorld';

test('renders learn react link', () => {
  render(<HelloWorld />);
  const linkElement = screen.getByText(/Hello World!/i);
  expect(linkElement).toBeInTheDocument();
});
