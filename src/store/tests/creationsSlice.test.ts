import projects from '../../assets/json/projects.json';
import { creationsSelector } from '../selectors';
import { creationsSlice, setTargetImage } from '../slices/creationsSlice';
import { setProjectImages, setTargetProject } from '../slices/creationsSlice';
import type { CreationsSlice } from '../slices/creationsSlice';
import type { IProject } from '../../interfaces/interface.creations';
import type { RootState } from '../store';

const initialState: CreationsSlice = {
    defaultProject: {
        about: [
            'The site design is made in the style of a computer game. It describes my achievements and skills, information about my life and goals.',
        ],
        brief: 'reflects growth in educational or professional achievements',
        images: [''],
        link: '',
        name: 'pixelpulse',
        technologies: ['ts', 'react', 'redux', 'nodeJS', 'mysql'],
    },
    targetProject: 0,
    targetImage: 0,
    projects: projects as IProject[],
    projectImages: [],
};

describe('crestionsSlice', (): void => {
    test('Should return empty state when passed an empty action', (): void => {
        const defaultState: CreationsSlice = creationsSlice.reducer(undefined, {} as { type: string });
        expect(defaultState).toEqual(initialState);
    });

    test('Selector should return correct creationsSlice slice from the store', (): void => {
        expect(creationsSelector({ creations: initialState } as RootState)).toEqual(initialState);
    });

    test('Should set project images', (): void => {
        const newImages: string[] = ['image-1', 'image-2', 'image-3'];
        const updateState: CreationsSlice = creationsSlice.reducer(initialState, setProjectImages(newImages));

        expect(updateState.projectImages).toEqual(newImages);
    });

    test('Should set target project', (): void => {
        const newTargetProject: number = 5;
        const updateState: CreationsSlice = creationsSlice.reducer(initialState, setTargetProject(newTargetProject));

        expect(updateState.targetProject).toBe(newTargetProject);
    });

    test('Should set target image', (): void => {
        const newTargetImage: number = 5;
        const updateState = creationsSlice.reducer(initialState, setTargetImage(newTargetImage));

        expect(updateState.targetImage).toBe(newTargetImage);
    });
});
