import React from 'react';
import { AchievementsToggle } from './AchievementsToggle';
import { render, screen } from '@testing-library/react';
import type { IAchievementsToggle } from '../../interfaces/interface.achievements';

describe('AchievementsToggle component', (): void => {
    const props: IAchievementsToggle = {
        checked: true,
        id: 'all',
        onChange: jest.fn(),
        textContent: 'test text',
        value: 'all',
    };

    test('Render with props', () => {
        render(<AchievementsToggle {...props} />);

        const label = screen.getByTestId('test-label');
        const text = screen.getByText(props.textContent);
        expect(text).toBeInTheDocument();
        expect(label).toMatchSnapshot();
    });
});
