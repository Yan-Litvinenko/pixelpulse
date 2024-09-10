import React from 'react';
import { AchievementsBlock } from './AchievementsBlock';
import { render, screen } from '@testing-library/react';
import type { IAchieve } from '../../interfaces/interface.achievements';

const achieve: IAchieve[] = [
    {
        date: '2024.01.23',
        description: 'Learn webpack',
        rarity: 'epic',
        status: 'achieved',
        title: 'Professional tools',
    },
];

describe('AchievementsBlock component', (): void => {
    test('Render with achieved length greater than 0', (): void => {
        const component = render(
            <AchievementsBlock
                achievements={achieve}
                prefixForClassName="achieved"
            />,
        );

        expect(screen.getByTestId('achievements-block')).toBeInTheDocument();
        expect(component).toMatchSnapshot();
    });

    test('Render with array length equal to 0', (): void => {
        render(
            <AchievementsBlock
                achievements={[]}
                prefixForClassName="achieved"
            />,
        );
        expect(screen.queryByTestId('achievements-block')).toBeNull();
    });
});
