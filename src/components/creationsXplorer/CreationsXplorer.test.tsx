import React from 'react';
import { CreationsXplorer } from './CreationsXplorer';
import { render, screen } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as routerHooks from 'react-router-dom';

jest.mock('react-redux');
jest.mock('react-router-dom');

const mockUseSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockUseParams = jest.spyOn(routerHooks, 'useParams');

describe('CreationsXplorer component', (): void => {
    test('Should return default path', (): void => {
        mockUseParams.mockReturnValue({ projectName: '' });
        mockUseSelector.mockReturnValue({
            defaultProject: {
                projects: [],
                targetProjects: '',
            },
        });

        render(<CreationsXplorer />);

        expect(screen.getByText(/location: \/projects/)).toBeInTheDocument();
    });

    test('Should return select project path', () => {
        const name: string = 'coffee-house';

        mockUseSelector.mockReturnValue({
            targetProject: name,
            projects: {
                'coffee-house': {
                    name,
                    projects: [],
                    targetProject: name,
                },
            },
        });
        mockUseParams.mockReturnValue({ projectName: name });

        render(<CreationsXplorer />);

        expect(screen.getByText(/location: \/projects\/coffee-house/)).toBeInTheDocument();
    });
});
