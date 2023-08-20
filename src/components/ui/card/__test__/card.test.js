/*eslint-disable*/
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../../../../test-utils'
import Card from '..';
import { mockResponse } from './__mock__';
const mock ={
    ...mockResponse,
    viewDetail: jest.fn(),
}
describe('Detail Test Case' , () => {
  it('should renders Detail component', async () => {
    const Wrapper = render(<Card {...mock}/>);
    const linkElement = await screen.findByText(/Talk to Me/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('should renders Detail component', async () => {
    const { container } = render(<Card {...mock}/>);
    const movieCard = container.querySelector(".card");
    fireEvent.click(movieCard);
    expect(mock.viewDetail).toHaveBeenCalledWith('10587');
  });

 
})
