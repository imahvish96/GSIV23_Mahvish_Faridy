/*eslint-disable*/
import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../../../test-utils'
import Details from '..';
import { mockDetailResponse } from './__mock__'
import { getMoviesById } from '../../../../redux/thunk';

jest.mock('../../../../redux/thunk', () => {
	// eslint-disable-next-line
	const { createAsyncThunk } = require('@reduxjs/toolkit');
	return {
		...jest.requireActual('../../../../redux/thunk'),
		getMoviesById: createAsyncThunk(
			'movie/getMoviesById',
			async () => (mockDetailResponse)
		),
	};
});


describe('Details Test Case' , () => {
  it('should renders Details component', async () => {
    const Wrapper = render(<Details />);
    const linkElement = await screen.findByText(/Talk to Me/i);
    expect(linkElement).toBeInTheDocument();
  });
})
