import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutComponent from './About.component';

test('Some text rendered in About', () => {
  const { getByText } = render(<AboutComponent />);
  const linkElement = getByText(/TypeScript with TypeGraphQL/i);
  expect(linkElement).toBeInTheDocument();
});
