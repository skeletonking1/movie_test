import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
describe('Header component', () => {
    const logo_src = "http://localhost/logo.png";
    test('Renders correctly', () => {
        const { container, getByRole } = render(
            <Header/>
        );
        const image = getByRole('img');
        expect(container).toBeInTheDocument();
        expect(image.src).toContain(logo_src);
    })
})