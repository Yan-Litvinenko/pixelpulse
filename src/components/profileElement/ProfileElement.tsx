import React from 'react';
import { ContextApp } from '../app/App';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import handleOpenModal from '../../utils/handleOpenModal';
import { Bluetooth, Hexagon } from '../svgIcon/SvgIcon';
import { IAppContext, BooleanState } from '../../interfaces/interface';
import styles from './ProfileElement.module.scss';

interface IProfileElement {
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
    const { adjacent, header } = props;
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const image: React.JSX.Element = adjacent.image === 'hexagon' ? <Hexagon /> : <Bluetooth />;
    const setStatusModal: BooleanState | undefined =
        header.text === 'social' ? contextApp?.setSocial : contextApp?.setAvailability;

    return (
        <div className={styles.profile__element}>
            <Heading className={`${styles.profile__title}`} level={'3'} textContent={header.text} />
            {adjacent.type === 'button' ? (
                <Button
                    className={styles['profile__' + header.text]}
                    delayEvent={false}
                    handleButton={() => {
                        handleOpenModal(setStatusModal);
                        contextApp?.handleSoundModal();
                    }}
                    image={() => image}
                    textContent={adjacent.text}
                    type="button"
                />
            ) : (
                <span className={styles.profile__text}>{adjacent.text}</span>
            )}
        </div>
    );
};

export default ProfileElement;
