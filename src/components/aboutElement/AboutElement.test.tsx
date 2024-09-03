import React from 'react';
import { AboutElement } from './AboutElement';
import { render, screen } from '@testing-library/react';
import type { IAboutElement } from '../../interfaces/interface.component';

describe('AboutElement component', (): void => {
    test('Should render with props', (): void => {
        const props: IAboutElement = {
            text: 'This is a test text',
            title: 'This is a test title',
        };
        const component = render(<AboutElement {...props} />);

        expect(screen.getByText(props.text)).toBeInTheDocument();
        expect(screen.getByText(props.title)).toBeInTheDocument();
        expect(component).toMatchSnapshot();
    });
});
