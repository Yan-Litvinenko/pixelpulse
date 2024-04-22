import React from 'react';
import { ContextApp } from '../app/App';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import Hexagon from '../hexagon/Hexagon';
import handleOpenModal from '../../utils/handleOpenModal';
import { IAppContext, BooleanState } from '../../interfaces/interfaces';
import styles from './ProfileElement.module.scss';

interface IProfileElement {
    version: 'mobile' | 'desktop';
    adjacent: {
        image?: string;
        text: string;
        type: string;
    };
    header: {
        text: string;
    };
}

const ProfileElement = (props: IProfileElement) => {
    const { version, adjacent, header } = props;
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    const setStatusModal: BooleanState | undefined =
        header.text === 'social' ? contextApp?.setSocial : contextApp?.setAvailability;

    const image: React.JSX.Element = adjacent.image === 'hexagon' ? <Hexagon /> : <Bluetooth />;
    const classElement = `${version === 'mobile' ? styles[`mobile__${header.text}`] : ''} ${styles.profile__element}`;

    return (
        <div className={classElement}>
            <Heading className={`${styles.profile__title}`} level={'3'} textContent={header.text} />
            {adjacent.type === 'button' ? (
                <Button
                    className={styles['profile__' + header.text]}
                    image={() => image}
                    onClick={() => handleOpenModal(setStatusModal, contextApp?.isMobile!)}
                    textContent={adjacent.text}
                />
            ) : (
                <span className={styles.profile__text}>{adjacent.text}</span>
            )}
        </div>
    );
};

function Bluetooth(): React.JSX.Element {
    return (
        <svg className={styles.bluetooth} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.341 12.0301L18.684 16.3731L13.028 22.0291H11.028V15.3431L6.66402 19.7071L5.24902 18.2931L11.028 12.5151V11.5451L5.24902 5.76505L6.66402 4.35105L11.028 8.71505V2.02905H13.028L18.684 7.68605L14.341 12.0301ZM13.028 13.5441V19.2011L15.856 16.3731L13.028 13.5441ZM13.028 10.5141L15.856 7.68605L13.028 4.85805V10.5151V10.5141Z"
                fill="#E84A4A"
            />
        </svg>
    );
}

export default ProfileElement;
