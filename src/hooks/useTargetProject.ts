import React from 'react';
import { IProject } from '../interfaces/interface.creations';
import { useAppContext } from './useAppContext';
import { useNavigate, useParams } from 'react-router-dom';
import projects from '../assets/json/projects.json';

const useTargetProject = () => {
    const navigate = useNavigate();
    const { projectName } = useParams();
    const { setTargetProject } = useAppContext();

    const transitionLink = (): void => {
        if (projectName) {
            const project = projects.findIndex((projectElement: IProject) => projectElement.name === projectName);

            if (project >= 0) {
                setTargetProject(project);
                return;
            }
            navigate('/errorPage');
        }
    };

    React.useEffect(transitionLink, [projectName]);
};

export { useTargetProject };
