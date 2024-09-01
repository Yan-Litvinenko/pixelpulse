import React from 'react';
import { AboutElement } from './AboutElement';
import { render, screen } from '@testing-library/react';

const text = 'test props text';
const title = 'test props title';

describe('AboutElement component', (): void => {
    test('Should return the correct props', (): void => {
        const component = render(<AboutElement text={text} title={title} />);
        const p = screen.getByText(text);
        const h3 = screen.getByText(title);

        expect(p).toBeInTheDocument();
        expect(h3).toBeInTheDocument();
        expect(component).toMatchSnapshot();
    });
});
