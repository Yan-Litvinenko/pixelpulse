interface IProject {
    about: string[];
    brief: string;
    images: string[];
    link: string;
    name: string;
    technologies: string[];
}

interface ICreationsBlock {
    projects: IProject[];
    projectDefault: IProject;
    xplorerState: XplorerState;
}

type XplorerState = 'projects' | 'projectImages';

export { IProject, ICreationsBlock, XplorerState };
