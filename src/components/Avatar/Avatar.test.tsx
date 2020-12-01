import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AvatarComponent from './Avatar.component';

test('Name rendered in Home', () => {
  const { getByText } = render(<AvatarComponent />);
  const linkElement = getByText(/Adrián Fernández Ramírez/i);
  expect(linkElement).toBeInTheDocument();
});
