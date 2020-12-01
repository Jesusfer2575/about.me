import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// We can skip test adding x before test function call
xtest('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
