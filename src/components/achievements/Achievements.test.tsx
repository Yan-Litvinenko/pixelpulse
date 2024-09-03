import React from 'react';
import { Achievements } from './Achievements';
import { render, screen, fireEvent } from '@testing-library/react';
import { soundsClickTrigger } from '../../store/slices/soundsSlice';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');

const mockUseSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('Achievements component', (): void => {
    test('Achievements render', (): void => {
        mockUseDispatch.mockReturnValue(jest.fn());
        mockUseSelector.mockReturnValue({
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

        expect(screen.getByText('Achievements')).toBeInTheDocument();
        expect(component).toMatchSnapshot();
    });

    test('Achievements loading', (): void => {
        mockUseDispatch.mockReturnValue(jest.fn());
        mockUseSelector.mockReturnValue({ achievements: null, loading: true, error: false });

        render(<Achievements />);
        expect(screen.getByTestId('triangle-loading')).toBeInTheDocument();
    });

    test('Achievements error', (): void => {
        mockUseDispatch.mockReturnValue(jest.fn());
        mockUseSelector.mockReturnValue({ achievements: null, loading: false, error: true });

        render(<Achievements />);

        expect(screen.getByText(/Error achievements loading/i)).toBeInTheDocument();
        expect(screen.getByTestId('achievements-list-error')).toBeInTheDocument();
    });

    test('Should change the checkbox', (): void => {
        const dispatch = jest.fn();
        mockUseDispatch.mockReturnValue(dispatch);

        render(<Achievements />);

        const allCheckbox = screen.getByLabelText('all') as HTMLInputElement;
        const achievedCheckbox = screen.getByLabelText('achieved') as HTMLInputElement;
        const inProgressCheckbox = screen.getByLabelText('in progress') as HTMLInputElement;

        expect(allCheckbox.checked).toBe(true);
        fireEvent.click(achievedCheckbox);

        expect(achievedCheckbox.checked).toBe(true);
        fireEvent.click(inProgressCheckbox);

        expect(inProgressCheckbox.checked).toBe(true);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith(soundsClickTrigger());
    });
});
