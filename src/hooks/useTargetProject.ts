import React from 'react';
import projects from '../assets/json/projects.json';
import { setTargetProject } from '../store/slices/creationsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import type { AppDispatch } from '../store/store';
import type { IProject } from '../interfaces/interface.creations';

const useTargetProject = (): void => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { projectName } = useParams();

    const transitionLink = (): void => {
        if (projectName) {
            const project = projects.findIndex(
                (projectElement: IProject) =>
                    projectElement.name === projectName,
            );

            if (project >= 0) {
                dispatch(setTargetProject(project));
                return;
            }
            navigate('/errorPage');
        }
    };

    React.useEffect(transitionLink, [projectName]);
};

export { useTargetProject };
