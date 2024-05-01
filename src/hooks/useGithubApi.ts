import React from 'react';
import { handleGithubRequest } from '../utils/handleGithubRequest';
import { ICommitLog } from '../interfaces/interface';

const useGithubApi = (): [ICommitLog[] | undefined, boolean] => {
    const [commits, setCommits] = React.useState<ICommitLog[] | undefined>(undefined);
    const [isLoadingGithub, setIsLoadingGithub] = React.useState<boolean>(false);

    React.useEffect(() => {
        const fetchCommits = async (): Promise<void> => {
            setIsLoadingGithub(true);

            try {
                const data: ICommitLog[] | undefined = await handleGithubRequest();
                setCommits(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoadingGithub(false);
            }
        };

        if (!commits) {
            fetchCommits();
        }
    }, []);

    return [commits, isLoadingGithub];
};

export default useGithubApi;
