import React from 'react';
import { render, screen } from '@testing-library/react';
import * as routerHooks from 'react-router-dom';
import { Games } from './Games';

jest.mock('react-redux');
jest.mock('react-router-dom', () => {
    return {
        ...jest.requireActual('react-router-dom'),
        useLocation: jest.fn(),
        Link: (props: routerHooks.LinkProps) => <a {...props}>{props.children}</a>,
    };
});

describe('Games component', (): void => {
    beforeEach((): void => {
        (routerHooks.useLocation as jest.Mock).mockReturnValue({
            pathname: '',
        });
    });

    test('Should return game list', (): void => {
        render(<Games />);
        expect(screen.getByTestId('list-game')).toBeInTheDocument();
    });

    test('Should return select game', (): void => {
        (routerHooks.useLocation as jest.Mock).mockReturnValue({
            pathname: '/games/',
        });

        render(<Games />);
        expect(screen.queryByTestId('list-game')).toBeNull();
    });
});
