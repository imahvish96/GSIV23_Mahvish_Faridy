import reducer from '../movies.slice';
import { searchMovies, getLatestMovies } from '../../thunk';
import { mockSliceRes } from './__mock__';

const initialState = {
	latestMovies: {},
    searchMovie: {},
};
describe('supplierSlice', () => {

	it('sets the payload when getLatestMovies  is fulfilled', () => {
		const action = { type: getLatestMovies.fulfilled.type, payload: mockSliceRes };
		const state = reducer(initialState, action);
		expect(state.latestMovies).toEqual(mockSliceRes);
	});
	it('sets the payload when getSite is fulfilled', () => {
		const action = { type: searchMovies.fulfilled.type, payload: mockSliceRes };
		const state = reducer(initialState, action);
		expect(state.searchMovie).toEqual(mockSliceRes);
	});
});
