import projects from '../assets/json/projects.json';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IProject } from '../interfaces/interface.creations';

type CreationsSlice = {
    readonly defaultProject: IProject;
    readonly projects: IProject[];
    targetProject: number;
    targetImage: number;
    projectImages: string[];
};

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

const creationsSlice = createSlice({
    name: 'creations',
    initialState,
    reducers: {
        setProjectImages(state, action: PayloadAction<string[]>) {
            state.projectImages = action.payload;
        },
        setTargetProject(state, action: PayloadAction<number>) {
            state.targetProject = action.payload;
        },
        setTargetImage(state, action: PayloadAction<number>) {
            state.targetImage = action.payload;
        },
    },
});

export const { setProjectImages, setTargetImage, setTargetProject } = creationsSlice.actions;
export { creationsSlice };
