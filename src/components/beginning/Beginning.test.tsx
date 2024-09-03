import React from 'react';
import { Beginning } from './Beginning';
import { render, screen } from '@testing-library/react';

describe('Beginning component', (): void => {
    test('Render', (): void => {
        const component = render(<Beginning />);

        expect(screen.getByTestId('beginning')).toBeInTheDocument();
        expect(component).toMatchSnapshot();
    });
});
