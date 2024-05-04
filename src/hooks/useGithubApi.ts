import React from 'react';
import { handleGithubRequest } from '../utils/handleGithubRequest';
import { ICommitLog } from '../interfaces/interface';

const useGithubApi = (): [ICommitLog[] | undefined, boolean, boolean] => {
    const [commits, setCommits] = React.useState<ICommitLog[] | undefined>(undefined);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<boolean>(false);

    React.useEffect(() => {
        const fetchCommits = async (): Promise<void> => {
            setIsLoading(true);

            try {
                const data: ICommitLog[] | undefined = await handleGithubRequest();

                setCommits(data);
                setError(false);
            } catch {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        if (!commits) {
            fetchCommits();
        }
    }, []);

    return [commits, isLoading, error];
};

export default useGithubApi;
