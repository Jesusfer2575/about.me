import React from 'react';
import { getByTestId, render, fireEvent, getByText, getByTitle, queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Menu from './Menu.component';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

xtest('Testing Menu is working', () => {
  const getById = queryByAttribute.bind(null, 'id');

  const { container } = render(<Menu open={true} toggleDrawer={jest.fn()} />);
  const hamburguerMenu = getById(container, 'hamburguer-menu');

  fireEvent.click(hamburguerMenu);
  const menuFound = getByText(container, /Home/i);
  expect(menuFound).toBeInTheDocument();
});
