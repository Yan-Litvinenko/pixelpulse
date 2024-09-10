import React from 'react';
import { About } from './About';
import { render, screen } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');

const mockUseSelector = jest.spyOn(reduxHooks, 'useSelector');

describe('About component', (): void => {
    test('Desktop about page', (): void => {
        mockUseSelector.mockReturnValue({ isSmall: false });

        const aboutComponent: RenderResult = render(<About />);

        expect(screen.getByTestId('about-mobile-picture')).toBeInTheDocument();
        expect(aboutComponent).toMatchSnapshot();
    });

    test('Mobile about page', (): void => {
        mockUseSelector.mockReturnValue({ isSmall: true });

        const aboutComponent: RenderResult = render(<About />);

        expect(
            screen.queryByTestId('about-mobile-picture'),
        ).not.toBeInTheDocument();
        expect(aboutComponent).toMatchSnapshot();
    });
});
