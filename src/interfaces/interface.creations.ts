interface IProject {
    about: string[];
    brief: string;
    images: string[];
    link: string;
    name: string;
    technologies: string[];
}

interface ICreations {
    projects: IProject[];
    xplorerState: XplorerState;
}

interface ICreationsTechnologiesItem {
    names: string[];
}

interface ICreationsXplorerItem {
    image: 'image' | 'folder';
    onClick: () => void;
    textContent: string;
}

interface ICreationsBlock extends ICreations {
    projectDefaultData: IProject;
}

interface IXplorer extends ICreations {
    setXplorerState: React.Dispatch<React.SetStateAction<XplorerState>>;
}

type XplorerState = 'projects' | 'projectImages';
type Technologies = {
    [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export {
    ICreationsBlock,
    ICreationsTechnologiesItem,
    ICreationsXplorerItem,
    IProject,
    IXplorer,
    Technologies,
    XplorerState,
};
