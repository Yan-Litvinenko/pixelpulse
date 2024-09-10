import React from 'react';
import { CreationsXplorerContent } from './CreationsXplorerContent';
import { render, screen, fireEvent } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import type { IProject } from '../../interfaces/interface.creations';
import * as reduxHooks from 'react-redux';
import type * as routerHooks from 'react-router-dom';
import * as modalActions from '../../store/slices/modalSlice';
import * as creationsXplorerContentAction from '../../store/slices/creationsSlice';
import * as soundsTrigger from '../../store/slices/soundsSlice';

jest.mock('react-router-dom', () => ({
    Link: (props: routerHooks.LinkProps) => <a {...props}>{props.children}</a>,
    useParams: jest.fn(),
}));

jest.mock('react-redux');

const mockUseSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockUseDispatch = jest.spyOn(reduxHooks, 'useDispatch');
const mockUseParams = useParams as jest.Mock;

mockUseDispatch.mockReturnValue(jest.fn());

describe('CreationsXplorerContent component', () => {
    test('Should return a notification that there are no projects', () => {
        const projects: IProject[] = [];

        mockUseParams.mockReturnValue({ projectName: '' });
        mockUseSelector.mockReturnValue({
            projects,
            targetProject: 0,
        });

        render(<CreationsXplorerContent />);

        expect(projects.length).toBe(0);
        expect(
            screen.getByText('No projects have been added'),
        ).toBeInTheDocument();
    });

    test('Should return a list of projects', () => {
        const projects: IProject[] = [
            { name: 'coffee-house', images: ['image'] } as IProject,
            { name: 'library', images: ['image'] } as IProject,
        ];
        const mockSetProjectImages = jest.spyOn(
            creationsXplorerContentAction,
            'setProjectImages',
        );
        const mockSetTargetProject = jest.spyOn(
            creationsXplorerContentAction,
            'setTargetProject',
        );
        const mockSoundsTrigger = jest.spyOn(
            soundsTrigger,
            'soundsClickTrigger',
        );

        mockUseParams.mockReturnValue({ projectName: '' });
        mockUseSelector.mockReturnValue({
            projects,
            targetProject: 0,
        });

        render(<CreationsXplorerContent />);

        fireEvent.click(screen.getByText('coffee-house'));

        expect(projects.length).toBeGreaterThan(0);
        expect(screen.getByText(projects[0].name)).toBeInTheDocument();
        expect(screen.getByText(projects[1].name)).toBeInTheDocument();

        expect(mockSetProjectImages).toHaveBeenCalledWith(projects[0].images);
        expect(mockSetTargetProject).toHaveBeenCalledWith(0);
        expect(mockSoundsTrigger).toHaveBeenCalledWith();
    });

    test('Should return a list of images', (): void => {
        const projects: IProject[] = [
            { name: 'test', images: ['name.img-1'] } as IProject,
        ];
        const mockOpenModalHandler = jest.spyOn(
            modalActions,
            'modalOpenHandler',
        );
        const mockSetTargetImage = jest.spyOn(
            creationsXplorerContentAction,
            'setTargetImage',
        );

        mockUseParams.mockReturnValue({ projectName: 'test' });
        mockUseSelector.mockReturnValue({
            projects,
            targetProject: 0,
        });

        render(<CreationsXplorerContent />);

        const image = screen.getByText('img-1');
        fireEvent.click(image);

        expect(image).toBeInTheDocument();
        expect(mockOpenModalHandler).toHaveBeenCalledWith({ key: 'creations' });
        expect(mockSetTargetImage).toHaveBeenCalledWith(0);
    });
});
