import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { movies } from '../mock-data';
import MovieCard from './MovieCard';
describe('Movie component', () => {
    const movie = movies[0];
    const heart_outline_src = "http://localhost/icon-heart-white.svg";
    const heart_full_src = "http://localhost/icon-heart-full.svg";
    const handleClick = jest.fn();
    let hoverMovie = 0;
    const handleMouseOver = jest.fn();
    test('Renders correctly', () => {
        const { container, getAllByRole, getByText } = render(
            <MovieCard
                movie={movie}
                handleClick={handleClick}
                hoverMovie={hoverMovie}
                handleMouseOver={handleMouseOver}
            />
        );
        const images = getAllByRole('img');
        expect(container).toBeInTheDocument();
        expect(images[0].src).toContain(heart_outline_src);
        expect(images[1].src).toContain(movie.Poster);
    })

    test('Mouse hover test', () => {
        hoverMovie = movie.imdbID;
        const { container, getByText } = render(
            <MovieCard
                movie={movie}
                handleClick={handleClick}
                hoverMovie={hoverMovie}
                handleMouseOver={handleMouseOver}
            />
        )
        expect(getByText(movie.Title)).toBeInTheDocument();
    })

    test('Fav icon click test', () => {
        const { container, getAllByRole } = render(
             <MovieCard
                movie={movie}
                handleClick={handleClick}
                hoverMovie={hoverMovie}
                handleMouseOver={handleMouseOver}
            />
        )
        const images = getAllByRole('img');
        fireEvent.click(images[0]);
        expect(images[0].src).toContain(heart_full_src);
    })
})