import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { movies } from '../../mock-data';
import MovieDetails from './MovieDetails';
import { BrowserRouter } from "react-router-dom";
import store from '../../store';
describe('Movie details component', () => {
    const arrow_grey_src = "http://localhost/icon-arrow-grey.svg";
    const arrow_white_src = "http://localhost/icon-arrow-white.svg";
    const handleClick = jest.fn();
    let hoverMovie = 0;
    const handleMouseOver = jest.fn();
    test('Renders correctly', () => {
        const { getAllByRole } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <MovieDetails />
                </BrowserRouter>
            </Provider>
        );
        const images = getAllByRole('img');
        expect(images[0].src).toContain(arrow_grey_src);
    });
    test('hover arrow icon test', () => {
        const {  getAllByRole } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <MovieDetails />
                </BrowserRouter>
            </Provider>
        );
        const images = getAllByRole('img');
        fireEvent.mouseOver(images[0]);
        expect(images[0].src).toContain(arrow_white_src);
    });
})