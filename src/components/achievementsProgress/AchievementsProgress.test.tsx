import React from 'react';
import { AchievementsProgress } from './AchievementsProgress';
import { render, screen, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as actions from '../../store/slices/modalSlice';

jest.mock('react-redux');

const mockUseSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockUseModalOpenAction = jest.spyOn(actions, 'modalOpenHandler');

describe('AchievementsProgress component', (): void => {
    test('Render', (): void => {
        const amountAchieved: number = 12;
        const amountAchievements: number = 21;

        mockUseSelector.mockReturnValue({ amountAchieved, amountAchievements });

        const component = render(<AchievementsProgress />);

        expect(
            screen.getByText(`${amountAchieved}/${amountAchievements}`),
        ).toBeInTheDocument();
        expect(component).toMatchSnapshot();
    });

    test('Click challenge me', (): void => {
        const dispatch = jest.fn();
        mockUseDispatch.mockReturnValue(dispatch);

        render(<AchievementsProgress />);

        fireEvent.click(screen.getByText(/challenge me/i));

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(mockUseModalOpenAction).toHaveBeenCalledWith({
            key: 'challenge',
        });
    });
});
