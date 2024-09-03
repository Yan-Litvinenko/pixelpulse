import React from 'react';
import { Creations } from './Creations';
import { fireEvent, render, screen } from '@testing-library/react';
import { soundsClickTrigger } from '../../store/slices/soundsSlice';
import * as reduxHooks from 'react-redux';
import type * as routerHooks from 'react-router-dom';

jest.mock('react-redux');
jest.mock('react-router-dom', () => {
    return {
        Link: (props: routerHooks.LinkProps) => <a {...props}>{props.children}</a>,
    };
});

jest.mock('../../hooks/useTargetProject', () => {
    return {
        useTargetProject: jest.fn(),
    };
});

jest.mock('../creationsDetails/CreationsDetails', () => ({
    CreationsDetails: () => <div>Mock CreationsDetails component</div>,
}));

jest.mock('../creationsTechnologies/CreationsTechnologies', () => ({
    CreationsTechnologies: () => <div>Mock CreationsTechnologies component</div>,
}));

jest.mock('../creationsAbout/CreationsAbout', () => ({
    CreationsAbout: () => <div>Mock CreationsAbout component</div>,
}));

jest.mock('../creationsXplorer/CreationsXplorer', () => ({
    CreationsXplorer: () => <div>Mock CreationsXplorer component</div>,
}));

const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('Creations component', (): void => {
    test('Render', (): void => {
        render(<Creations />);
        expect(screen.getByTestId('creations')).toBeInTheDocument();
    });

    test('Click: back to all projects', () => {
        const dispatch = jest.fn();
        mockUseDispatch.mockReturnValue(dispatch);

        render(<Creations />);

        fireEvent.click(screen.getByText(/back to all projects/i));

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(soundsClickTrigger());
    });
});
