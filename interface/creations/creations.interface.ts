export type Technologies = {
    [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export type ProjectImage = {
    name: string;
    height: number;
    width: number;
};

export type Project = {
    backgroundColor: string;
    about: string[];
    brief: string;
    images: ProjectImage[];
    link: string;
    name: string;
    technologies: string[];
};

export type CreationsSlice = {
    readonly defaultProject: Project;
    readonly projects: Project[];
    targetProject: number;
    targetImage: number;
    projectImages: ProjectImage[];
};

export type VectorSliderProps = {
    className: string;
};
