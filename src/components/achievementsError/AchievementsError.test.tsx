import React from 'react';
import { AchievementsError } from './AchievementsError';
import { render, screen, fireEvent } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as actions from '../../store/slices/modalSlice';

jest.mock('react-redux');

const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockOpenModalAction = jest.spyOn(actions, 'modalOpenHandler');

describe('AchievementsError component', (): void => {
    test('Render', (): void => {
        const component = mockUseDispatch.mockReturnValue(jest.fn());

        render(<AchievementsError />);

        expect(
            screen.getByTestId('achievements-list-error'),
        ).toBeInTheDocument();
        expect(component).toMatchSnapshot();
    });

    test('Click: report a bug', (): void => {
        render(<AchievementsError />);

        fireEvent.click(screen.getByTestId('achievements-modal-error'));

        expect(mockOpenModalAction).toHaveBeenCalledWith({ key: 'social' });
    });
});
