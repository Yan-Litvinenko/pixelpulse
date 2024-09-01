import React from 'react';
import { AchievementsProgress } from './AchievementsProgress';
import { render, screen, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');
const mockSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockDispatch = jest.spyOn(reduxHooks, 'useDispatch');

const amountAchieved: number = 12;
const amountAchievements: number = 20;

describe('AchievementsProgress component', (): void => {
    test('Render', (): void => {
        mockSelector.mockReturnValue({ amountAchieved, amountAchievements });

        const component = render(<AchievementsProgress />);
        const statistic = screen.getByText(`${amountAchieved}/${amountAchievements}`);

        expect(statistic).toBeInTheDocument();
        expect(component).toMatchSnapshot();
    });

    test('Click challenge me', (): void => {
        const dispatch = jest.fn();
        mockDispatch.mockReturnValue(dispatch);

        render(<AchievementsProgress />);

        const button = screen.getByText(/challenge me/i);
        fireEvent.click(button);

        expect(dispatch).toHaveBeenCalledTimes(1);
    });
});
