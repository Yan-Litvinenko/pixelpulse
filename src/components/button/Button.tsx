import React from 'react';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import { IButton } from '../../interfaces/interface.component';

const Button = (props: IButton): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { isLarge, isMedium } = contextApp;
    const { handleButton, delayEvent, className, textContent, isValid, type, image } = props;
    const button = React.useRef<null | HTMLButtonElement>(null);

    React.useEffect(() => {
        if (isLarge || isMedium) {
            button.current?.addEventListener('click', handleButton);
        } else if (delayEvent) {
            setTimeout(() => {
                button.current?.addEventListener('click', handleButton);
            }, contextApp.TRANSITION_TIME);
        } else {
            button.current?.addEventListener('click', handleButton);
        }

        return () => {
            button.current?.removeEventListener('click', handleButton);
        };
    }, [button]);

    return (
        <button className={className} disabled={isValid && isValid} type={type} ref={button}>
            {textContent}
            {image && image()}
        </button>
    );
};

export default Button;
