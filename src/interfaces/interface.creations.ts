type XplorerLocation = 'projects' | 'projectImages';
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
    xplorerLocation: XplorerLocation;
}

interface ICreationsXplorer {
    projects: IProject[];
    setXplorerLocation: React.Dispatch<React.SetStateAction<XplorerLocation>>;
    xplorerLocation: XplorerLocation;
}

interface ICreationsXplorerItem {
    image: 'image' | 'folder';
    onClick: () => void;
    textContent: string;
}

interface ICreationsTechnologiesContent {
    names: string[];
}

export {
    ICreationsBlock,
    ICreationsTechnologiesContent,
    ICreationsXplorer,
    ICreationsXplorerItem,
    IProject,
    Technologies,
    XplorerLocation,
};
