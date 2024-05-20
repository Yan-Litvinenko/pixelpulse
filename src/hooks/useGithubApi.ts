import React from 'react';
import { handleGithubRequest } from '../utils/handleGithubRequest';
import { ICommitLog } from '../interfaces/interface.github';

const useGithubApi = (): [ICommitLog[], boolean, boolean] => {
    const [commits, setCommits] = React.useState<ICommitLog[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<boolean>(false);

    React.useEffect(() => {
        const fetchCommits = async (): Promise<void> => {
            setIsLoading(true);

            try {
                const data: ICommitLog[] = await handleGithubRequest();

                if (data.length === 0) setError(true);

                setCommits(data);
                setError(false);
            } catch {
                setError(true);
                setTimeout(fetchCommits, 5000);
            } finally {
                setIsLoading(false);
            }
        };

        if (commits.length === 0) {
            fetchCommits();
            setError(true);
        }
    }, []);

    return [commits, isLoading, error];
};

export default useGithubApi;
