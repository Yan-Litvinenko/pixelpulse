import React from 'react';
import { CreationsTechnologies } from './CreationsTechnologies';
import { render, screen } from '@testing-library/react';

jest.mock(
    '../creationsTechnologiesContent/CreationsTechnologiesContent',
    () => {
        return {
            CreationsTechnologiesContent: () => <div>Mock component</div>,
        };
    },
);

describe('CreationsTechnologies', (): void => {
    test('Render', (): void => {
        const component = render(<CreationsTechnologies />);

        expect(screen.getByText(/technologies/i)).toBeInTheDocument();
        expect(component).toMatchSnapshot();
    });
});
