import React from 'react';
import { AchievementsProgressRing } from './AchievementsProgressRing';
import { render, screen } from '@testing-library/react';

describe('AchievementsProgressRing component', (): void => {
    test('Renders correctly with given percent', (): void => {
        const percent = 75;
        const square = 148;
        const border = 14;
        const CYX = square / 2;
        const radius = square / 2 - border * 2;
        const circumference = 2 * Math.PI * radius;

        render(<AchievementsProgressRing percent={percent} />);

        const svg = screen.getByTestId('svg');
        const circle = screen.getByTestId('circle');

        expect(svg).toBeInTheDocument();
        expect(circle).toBeInTheDocument();

        expect(circle.getAttribute('stroke-width')).toBe(`${border}`);
        expect(circle.getAttribute('cy')).toBe(`${CYX}`);
        expect(circle.getAttribute('cx')).toBe(`${CYX}`);
        expect(circle.getAttribute('r')).toBe(`${radius}`);

        expect(circle).toHaveStyle(`stroke-dashoffset: ${circumference - (percent / 100) * circumference}`);
        expect(circle).toHaveStyle(`stroke-dasharray: ${circumference} ${circumference}`);

        expect(svg).toMatchSnapshot();
    });

    test('Renders correctly with 0 percent', (): void => {
        const percent = 0;
        const square = 148;
        const border = 14;
        const radius = square / 2 - border * 2;
        const circumference = 2 * Math.PI * radius;
        const dashoffset = `stroke-dashoffset: ${circumference - (percent / 100) * circumference}`;

        render(<AchievementsProgressRing percent={percent} />);

        const circle = screen.getByTestId('circle');

        expect(circle).toBeInTheDocument();
        expect(circle).toHaveStyle(dashoffset);
    });

    test('Renders correctly with 100 percent', (): void => {
        const percent = 100;

        render(<AchievementsProgressRing percent={percent} />);

        const circle = screen.getByTestId('circle');

        expect(circle).toBeInTheDocument();
        expect(circle).toHaveStyle('stroke-dashoffset: 0');
    });
});
