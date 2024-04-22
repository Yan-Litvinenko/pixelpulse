import React from 'react';
import Heading from '../heading/Heading';
import Project from '../project/Project';
import Update from '../update/Update';
import OldLogs from '../oldLogs/OldLogs';
import Frame from '../frame/Frame';
import MobileBoxButton from '../mobileBoxButton/MobileBoxButton';
import githubApi from '../../utils/githubApi';
import { IGithubRespone } from '../../interfaces/interfaces';
import styles from './Logs.module.scss';

const ACCESS_TOKEN: string | undefined = process.env.REACT_APP_GITHUB_TOKEN;
const URL: string | undefined = process.env.REACT_APP_GITHUB_URL;

const Logs = (): React.JSX.Element => {
    const [commits, setCommits] = React.useState<IGithubRespone[]>();

    React.useEffect(() => {
        const fetchGithubAPI = async () => {
            if (ACCESS_TOKEN && URL) {
                try {
                    const data: IGithubRespone[] | undefined = await githubApi(URL, ACCESS_TOKEN);
                    if (data) {
                        setCommits(data.slice(0, 5));
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            } else {
                console.error('Access token is undefined');
            }
        };

        fetchGithubAPI();
    }, []);

    return (
        <main className={styles.logs}>
            <Frame className={styles.logs__frame} />
            <div className={styles.logs__inner}>
                <Heading className={styles.logs__title} level="2" textContent="data log dump initialized." />
                <Project commits={commits} />
                <Update />
                <OldLogs commits={commits} />
                <MobileBoxButton />
            </div>
        </main>
    );
};

export default Logs;
