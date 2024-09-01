import React from 'react';
import { Achievements } from './Achievements';
import { render, screen, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');

const mockDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockSelector = jest.spyOn(reduxHooks, 'useSelector');

describe('Achievements component', (): void => {
    test('Achievements render', (): void => {
        mockDispatch.mockReturnValue(jest.fn());
        mockSelector.mockReturnValue({
            achievements: [
                {
                    id: 1,
                    date: 'ongoing',
                    description: 'Get level 80',
                    rarity: 'legendary',
                    status: 'in progress',
                    title: '80 level',
                },
            ],
            loading: false,
            error: false,
        });

        const component = render(<Achievements />);

        expect(component).toMatchSnapshot();
    });

    test('Achievements loading', (): void => {
        mockDispatch.mockReturnValue(jest.fn());
        mockSelector.mockReturnValue({ achievements: null, loading: true, error: false });

        render(<Achievements />);

        const triangle = screen.getByTestId('triangle-loading');

        expect(triangle).toBeInTheDocument();
    });

    test('Achievements error', (): void => {
        mockDispatch.mockReturnValue(jest.fn());
        mockSelector.mockReturnValue({ achievements: null, loading: false, error: true });

        render(<Achievements />);

        const error = screen.getByTestId('achievements-error');

        expect(error).toBeInTheDocument();
    });

    test('Should change the checkbox', () => {
        const dispatch = jest.fn();

        mockDispatch.mockReturnValue(dispatch);
        render(<Achievements />);

        fireEvent.click(screen.getByText('in progress'));
        expect(dispatch).toHaveBeenCalledTimes(1);
    });
});
