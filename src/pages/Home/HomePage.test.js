import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from "react-router-dom";
import HomePage from './HomePage';
describe('HomePage component', () => {
    const initialState = {
        movies: [],
        movieDetails: null,
        error: null,
        loading: false,
    };
    const mockStore = configureStore();
    let store, wrapper;
    store = mockStore(initialState);
    test('Renders correctly', () => {
        const { container, getAllByRole, getByText } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <HomePage />
                </BrowserRouter>
            </Provider>
        );
        expect(getByText(`Don't know what to search?`)).toBeInTheDocument();
    });
})