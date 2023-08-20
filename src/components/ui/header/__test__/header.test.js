/*eslint-disable*/
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../../../../test-utils'
import Header from '..';

describe('Header Test Case' , () => {
  it('should render and change value in searchbar', async () => {
    const { container } = render(<Header/>);
    const searchBar = screen.getByPlaceholderText('Search...');
    screen.debug(searchBar);
    fireEvent.change(searchBar, {target: {value: 'spiderman'}});
    // expect(mock.viewDetail).toHaveBeenCalledWith('10587');
  });

 
})
