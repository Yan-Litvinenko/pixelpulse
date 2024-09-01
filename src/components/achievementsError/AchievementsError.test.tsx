import React from 'react';
import { AchievementsError } from './AchievementsError';
import { render, screen } from '@testing-library/react';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');

const mockDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('AchievementsError component', (): void => {
    test('Render', (): void => {
        const component = mockDispatch.mockReturnValue(jest.fn());
        render(<AchievementsError />);

        const error = screen.getByTestId('achievements-error');
        expect(error).toBeInTheDocument();
        expect(component).toMatchSnapshot();
    });
});
