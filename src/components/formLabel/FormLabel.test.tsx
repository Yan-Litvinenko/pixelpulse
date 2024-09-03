import React from 'react';
import { FormLabel } from './FormLabel';
import { render, screen } from '@testing-library/react';
import type { Field, ILabel } from '../../interfaces/interface.form';

const mockProps: ILabel = {
    errors: {},
    name: 'title' as Field,
    child: 'input' as 'input' | 'textarea',
    textContent: 'Test input text',
    placeholder: 'Placeholder input text',
    maxLength: 20,
    minLength: 2,
    register: jest.fn(),
    pattern: /expRegular/,
    patternMessage: 'Pattern message',
    autofocus: true,
};

describe('FormLabel component', (): void => {
    test('Should return label with input', (): void => {
        render(<FormLabel {...mockProps} />);

        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByText(mockProps.textContent)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(mockProps.placeholder)).toBeInTheDocument();
    });

    test('Applies autofocus prop correctly', (): void => {
        render(<FormLabel {...mockProps} />);
        expect(screen.getByPlaceholderText(mockProps.placeholder)).toHaveFocus();
    });

    test('Should return label with textarea', (): void => {
        mockProps.child = 'textarea';

        render(<FormLabel {...mockProps} />);

        expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLTextAreaElement);
        expect(screen.getByText(mockProps.textContent)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(mockProps.placeholder)).toBeInTheDocument();
    });
});
