import React from 'react';
import { Cross } from './Cross';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Cross component', (): void => {
    test('Should execute hanlder', (): void => {
        const handler = jest.fn();

        render(<Cross handler={handler} />);

        fireEvent.click(screen.getByTestId('cross'));
        expect(handler).toHaveBeenCalledTimes(1);
    });
});
