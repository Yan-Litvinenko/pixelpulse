import React from 'react';
import { AchievementsAchieve } from './AchievementsAchieve';
import { render, screen } from '@testing-library/react';
import type { IAchievementsAchieve } from '../../interfaces/interface.achievements';

const achieve: IAchievementsAchieve = {
    date: '2024.01.23',
    description: 'Learn webpack',
    rarity: 'epic',
    executionStatus: 'achieved',
    title: 'Professional tools',
};

describe('AchievementsAchieve component', (): void => {
    test('Render', (): void => {
        const component = render(<AchievementsAchieve {...achieve} />);

        Object.values(achieve).forEach((element) => {
            const result = screen.getByText(new RegExp(element));
            expect(result).toBeInTheDocument();
        });

        expect(component).toMatchSnapshot();
    });
});
