import { useState, useCallback } from 'react';
import About from '../components/about/About';
import Achievements from '../components/achievements/Achievements';
import Beginning from '../components/beginning/Beginning';
import Creations from '../components/creations/Creations';
import Games from '../components/games/Games';
import Logs from '../components/logs/Logs';
import Welcome from '../components/welcome/Welocme';
import { Page } from '../interfaces/interface';

type PageComponent = () => JSX.Element;

const usePage = (initValue: Page): [component: PageComponent, Page, (page: Page) => void] => {
    const [value, setValue] = useState<Page>(initValue);

    const getPageComponent = useCallback((): PageComponent => {
        switch (value) {
            case 'about':
                return About;
            case 'achievements':
                return Achievements;
            case 'beginning':
                return Beginning;
            case 'creations':
                return Creations;
            case 'games':
                return Games;
            case 'logs':
                return Logs;
            case 'welcome':
                return Welcome;
            default:
                throw new Error(`Page component for '${value}' not found`);
        }
    }, [value]);

    const setPage = useCallback((page: Page) => setValue(page), []);

    return [getPageComponent(), value, setPage];
};

export default usePage;
