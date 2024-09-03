import React from 'react';
import { CreationsDetails } from './CreationsDetails';
import { render, screen } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as routerHooks from 'react-router-dom';

jest.mock('react-redux');
jest.mock('react-router-dom');

const mockUseSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockUseParams = jest.spyOn(routerHooks, 'useParams');

const mockData = {
    name: 'mock name',
    brief: 'mock brief',
};

describe('CreationsDetails compoennt', () => {
    test('Should return default project details', () => {
        mockUseParams.mockReturnValue({ projectName: '' });
        mockUseSelector.mockReturnValue({
            defaultProject: {
                name: mockData.name,
                brief: mockData.brief,
            },
        });

        render(<CreationsDetails />);

        expect(screen.getByText(mockData.name)).toBeInTheDocument();
        expect(screen.getByText(mockData.brief)).toBeInTheDocument();
    });

    test('Should return select project details', () => {
        mockUseSelector.mockReturnValue({
            targetProject: 'coffee-house',
            projects: {
                'coffee-house': {
                    name: mockData.name,
                    brief: mockData.brief,
                },
            },
        });
        mockUseParams.mockReturnValue({ projectName: 'coffee-house' });

        render(<CreationsDetails />);

        expect(screen.getByText(mockData.name)).toBeInTheDocument();
        expect(screen.getByText(mockData.brief)).toBeInTheDocument();
    });
});
