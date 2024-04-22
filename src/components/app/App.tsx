import React from 'react';
import { useMediaQuery } from 'react-responsive';
import useLocalStorage from '../../hooks/useLocalStorage';
import usePage from '../../hooks/usePage';
import Layout from '../layout/Layout';
import ModalAvailability from '../modalAvailability/ModalAvailability';
import ModalSocial from '../modalSocial/ModalSocial';
import ModalCredits from '../modalCredits/ModalCredits';
import ModalSetting from '../modalSetting/ModalSetting';
import NavigationMobile from '../navigationMobile/NavigationMobile';
import { IAppContext, Page, GetWrapperClass } from '../../interfaces/interfaces';
import styles from './App.module.scss';

const ContextApp = React.createContext<IAppContext | undefined>(undefined);
const TRANSITION_TIME: number = 1500;

const getWrapperClass = ({ effects, settingState, isMobile }: GetWrapperClass): string => {
    const classes: string[] = [styles.wrapper];

    if (!isMobile) {
        if (effects.some((state) => state)) {
            classes.push(styles.wrapper__active_left);
        }
        if (settingState) {
            classes.push(styles.wrapper__active_center);
        }
    }

    return classes.join(' ');
};

const extraComponent = (page: Page, isMobile: boolean, stateMobileNavigation: boolean): React.JSX.Element => {
    if (page === 'welcome') {
        return <></>;
    }

    if (isMobile && stateMobileNavigation) {
        return <NavigationMobile />;
    }

    if (!isMobile) {
        return <Layout />;
    }

    return <></>;
};

const App = (): React.JSX.Element => {
    const isMobile: boolean = useMediaQuery({ maxWidth: 1200 });

    const [PageComponent, page, setPage] = usePage('welcome');
    const [availability, setAvailability] = React.useState<boolean>(false);
    const [credits, setCredits] = React.useState<boolean>(false);
    const [setting, setSetting] = React.useState<boolean>(false);
    const [social, setSocial] = React.useState<boolean>(false);
    const [sounds, setSounds] = useLocalStorage(true, 'sounds');
    const [music, setMusic] = useLocalStorage(true, 'music');
    const [navigationMobile, setNavigationMobile] = React.useState<boolean>(false);

    return (
        <>
            <ContextApp.Provider
                value={{
                    TRANSITION_TIME,
                    setAvailability,
                    setCredits,
                    setMusic,
                    setNavigationMobile,
                    setPage,
                    setSetting,
                    setSocial,
                    setSounds,
                    isMobile,
                    music,
                    navigationMobile,
                    page,
                    sounds,
                    styles,
                }}
            >
                <div
                    className={getWrapperClass({
                        effects: [social, availability, credits],
                        settingState: setting,
                        isMobile,
                    })}
                >
                    {<PageComponent />}
                    {extraComponent(page, isMobile, navigationMobile)}
                </div>

                {availability ? <ModalAvailability /> : null}
                {social ? <ModalSocial /> : null}
                {credits ? <ModalCredits /> : null}
                {setting ? <ModalSetting /> : null}
            </ContextApp.Provider>
        </>
    );
};

export { App, ContextApp, Page };
