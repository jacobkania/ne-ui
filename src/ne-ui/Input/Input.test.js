import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

test('renders label inside input', () => {
  const { getByPlaceholderText } = render(<Input label="Test label" />);
  const linkElement = getByPlaceholderText(/Test label/i);
  expect(linkElement).toBeTruthy();
});
