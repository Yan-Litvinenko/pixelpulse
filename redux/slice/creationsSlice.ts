import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CreationsSlice, ProjectImage } from '@/interface/creations/creations.interface';

const initialState: CreationsSlice = {
    defaultProject: {
        about: [
            'The site design is made in the style of a computer game. It describes my achievements and skills, information about my life and goals.',
        ],
        backgroundColor: '',
        brief: 'reflects growth in educational or professional achievements',
        images: [],
        link: '',
        name: 'pixelpulse',
        technologies: ['github', 'ts', 'nextjs', 'redux', 'mysql'],
    },
    projects: [
        {
            about: [
                'The application includes cross-browser and adaptive layout, ensuring perfect display on any device. Semantic HTML improves accessibility and SEO, while support for modern image formats (AVIF, WebP), including retina, ensures fast loading and crisp graphics. This is a landing page that attracts attention and works flawlessly in any browser.',
            ],
            backgroundColor: '#050607',
            brief: 'Graphic Designer Portfolio',
            images: [
                { name: 'ORPH_statue.png', width: 850, height: 400 },
                { name: 'ORPH_works.png', width: 1550, height: 450 },
                { name: 'ORPH_contribution.png', width: 1550, height: 450 },
                { name: 'ORPH_contribution-2.png', width: 1550, height: 450 },
            ],
            link: 'https://yan-litvinenko.github.io/orpheus/',
            name: 'orpheus',
            technologies: ['github', 'figma', 'gulp', 'sass', 'js'],
        },
    ],
    targetProject: 0,
    targetImage: 0,
    projectImages: [],
};

const creationsSlice = createSlice({
    name: 'creations',
    initialState,
    reducers: {
        setProjectImages(state, action: PayloadAction<ProjectImage[]>) {
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
export type { CreationsSlice };
export default creationsSlice.reducer;
