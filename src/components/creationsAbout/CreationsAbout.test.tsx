import React from 'react';
import { CreationsAbout } from './CreationsAbout';
import { render, screen } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import * as routerHooks from 'react-router-dom';

jest.mock('react-redux');
jest.mock('react-router-dom');

const mockUseSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockUseParams = jest.spyOn(routerHooks, 'useParams');

const mockData = {
    selectProject: 'This select project',
    defaultText:
        'The site design is made in the style of a computer game. It describes my achievements and skills, information about my life and goals.',
};

describe('CreationsAbout component', (): void => {
    test('Should render default about project', (): void => {
        mockUseSelector.mockReturnValue({
            defaultProject: {
                about: [mockData.defaultText],
            },
        });

        mockUseParams.mockReturnValue({ projectName: '' });

        render(<CreationsAbout />);
        expect(screen.getByText(mockData.defaultText)).toBeInTheDocument();
    });

    test('Should return select project', (): void => {
        mockUseSelector.mockReturnValue({
            targetProject: 'coffee-house',
            projects: {
                'coffee-house': {
                    about: [mockData.selectProject],
                },
            },
        });

        mockUseParams.mockReturnValue({ projectName: 'coffee-house' });

        render(<CreationsAbout />);
        expect(screen.getByText(mockData.selectProject)).toBeInTheDocument();
    });
});
