import React from 'react';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';

interface IButton {
    className: string;
    delayEvent: boolean;
    handleButton: () => void;
    image?: () => React.ReactNode;
    isValid?: boolean;
    textContent: string;
    type: 'submit' | 'button';
}

const Button = (props: IButton): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const button = React.useRef<null | HTMLButtonElement>(null);

    React.useEffect(() => {
        if (contextApp.isLarge || contextApp.isMedium) {
            console.log('первое условие');
            button.current?.addEventListener('click', props.handleButton);
        } else if (props.delayEvent) {
            console.log('второе условие');
            setTimeout(() => {
                button.current?.addEventListener('click', props.handleButton);
            }, contextApp?.TRANSITION_TIME);
        } else {
            console.log('третье условие');
            button.current?.addEventListener('click', props.handleButton);
        }

        return () => {
            button.current?.removeEventListener('click', props.handleButton);
        };
    }, [button]);

    return (
        <button className={props.className} disabled={props.isValid && !props.isValid} type={props.type} ref={button}>
            {props.textContent}
            {props.image && props.image()}
        </button>
    );
};

export default Button;
