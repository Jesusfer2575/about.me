import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SetupComponent from './Setup.component';

test('Some text rendered in Setup', () => {
  const { getByText } = render(<SetupComponent />);
  const linkElement = getByText(/My Developer Setup/i);
  expect(linkElement).toBeInTheDocument();
});
