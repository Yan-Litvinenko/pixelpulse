import React from 'react';
import { ErrorPage } from './ErrorPage';
import { ErrorBoundaryPage } from './ErrorBoundaryPage';
import * as reduxHooks from 'react-redux';
import type * as routerHooks from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('react-redux');
jest.mock('react-router-dom', () => {
    return {
        Link: (props: routerHooks.LinkProps) => (
            <a {...props}>{props.children}</a>
        ),
    };
});

const reset = jest.fn();
const dispatch = jest.fn();
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockProps = {
    status: 'Mock status',
    detail: 'Mock detail',
};

beforeEach(() => jest.clearAllMocks());

describe('ErrorPage component', (): void => {
    test('Should render with props', (): void => {
        render(<ErrorPage {...mockProps} />);
        expect(screen.getByText(mockProps.detail)).toBeInTheDocument();
        expect(screen.getByText(mockProps.status)).toBeInTheDocument();
    });

    test('The click function should work', (): void => {
        mockUseDispatch.mockReturnValue(dispatch);

        render(<ErrorPage {...mockProps} />);

        fireEvent.click(screen.getByText(/return home/i));
        expect(dispatch).toHaveBeenCalledTimes(1);
    });
});

describe('ErrorBoundaryPage component', (): void => {
    test('Should render with props', (): void => {
        render(<ErrorBoundaryPage {...mockProps} reset={reset} />);
        expect(screen.getByText(mockProps.detail)).toBeInTheDocument();
        expect(screen.getByText(mockProps.status)).toBeInTheDocument();
    });

    test('The click function should work', (): void => {
        mockUseDispatch.mockReturnValue(dispatch);

        render(<ErrorBoundaryPage {...mockProps} reset={reset} />);

        fireEvent.click(screen.getByText(/reset error/i));
        expect(dispatch).toHaveBeenCalledTimes(1);
    });
});
