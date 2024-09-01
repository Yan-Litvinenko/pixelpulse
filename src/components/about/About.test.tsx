import React from 'react';
import { About } from './About';
import { render, screen } from '@testing-library/react';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');
const mockIsSmall = jest.spyOn(reduxHooks, 'useSelector');
const alt: string = 'A portrait of Yan Litvinenko';

describe('About component', (): void => {
    test('Desktop about page', (): void => {
        mockIsSmall.mockReturnValue(false);

        const about = render(<About />);
        const image = screen.getByAltText(alt);

        expect(image).toBeInTheDocument();
        expect(about).toMatchSnapshot();
    });

    test('Mobile about page', (): void => {
        mockIsSmall.mockReturnValue({ isSmall: true });

        const about = render(<About />);
        const image = screen.queryByAltText(alt);

        expect(image).not.toBeInTheDocument();
        expect(about).toMatchSnapshot();
    });
});
