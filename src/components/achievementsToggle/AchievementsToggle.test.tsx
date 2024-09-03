import React from 'react';
import { AchievementsToggle } from './AchievementsToggle';
import { render, screen } from '@testing-library/react';
import type { IAchievementsToggle } from '../../interfaces/interface.achievements';

const props: IAchievementsToggle = {
    checked: true,
    id: 'all',
    onChange: jest.fn(),
    textContent: 'test text',
    value: 'all',
};

describe('AchievementsToggle component', (): void => {
    test('Render with props', (): void => {
        render(<AchievementsToggle {...props} />);

        expect(screen.getByText(props.textContent)).toBeInTheDocument();
        expect(screen.getByTestId('test-achievements-label')).toMatchSnapshot();
    });
});
