interface IProject {
    name: string;
    brief: string;
    technologies: string[];
    about: string[];
    images: string[];
}

interface ICreationsBlock {
    projects: IProject[];
    projectCount: number;
    projectDefault: IProject;
    xplorerState: XplorerState;
}

type XplorerState = 'projects' | 'projectImages';

export { IProject, ICreationsBlock, XplorerState };
