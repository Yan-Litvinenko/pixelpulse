import React from 'react';
import { handleGithubRequest } from '../utils/handleGithubRequest';
import { ICommitLog } from '../interfaces/interface';

const useGithubApi = (): Array<ICommitLog[] | undefined> => {
    const [commits, setCommits] = React.useState<ICommitLog[] | undefined>(undefined);

    React.useEffect(() => {
        const fetchCommits = async () => {
            try {
                const data = await handleGithubRequest();
                setCommits(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCommits();
    }, []);

    return [commits];
};

export default useGithubApi;
