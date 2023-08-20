/*eslint-disable*/
import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../../../../test-utils'
import List from '../index';
import { mock } from './__mock__/mock'
import { getLatestMovies } from '../../../../redux/thunk';

jest.mock('../../../../redux/thunk', () => {
	// eslint-disable-next-line
	const { createAsyncThunk } = require('@reduxjs/toolkit');
	return {
		...jest.requireActual('../../../../redux/thunk'),
		getLatestMovies: createAsyncThunk(
			'movie/getLatestMovies',
			async () => (mock)
		),
	};
});

describe('List Test Case' , () => {
  it('should renders List component', async () => {
    const Wrapper = render(<List />);
    const linkElement = await screen.findByText(/Talk to Me/i);
    expect(linkElement).toBeInTheDocument();
  });

})
