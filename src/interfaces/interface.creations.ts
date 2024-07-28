type Technologies = {
    [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

interface IProject {
    about: string[];
    brief: string;
    images: string[];
    link: string;
    name: string;
    technologies: string[];
}

interface ICreationsBlock {
    projectDefault: IProject;
    projects: IProject[];
}

interface ICreationsXplorer {
    projects: IProject[];
}

interface ICreationsTechnologiesContent {
    names: string[];
}

export { ICreationsBlock, ICreationsTechnologiesContent, ICreationsXplorer, IProject, Technologies };
