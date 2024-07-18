import React from 'react';
import { ContextApp } from '../app/App';
import Button from '../button/Button';
import handleOpenModal from '../../utils/handleOpenModal';
import { Bluetooth, Hexagon } from '../svgIcon/SvgIcon';
import { IAppContext, BooleanState } from '../../interfaces/interface';
import { IProfileElement } from '../../interfaces/interface.component';
import styles from './ProfileElement.module.scss';

const ProfileElement = (props: IProfileElement): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { adjacent, header } = props;
    const { setSocial, setAvailability, handleSoundModal } = contextApp;
    const image: React.JSX.Element = adjacent.image === 'hexagon' ? <Hexagon /> : <Bluetooth />;
    const setStatusModal: BooleanState | undefined = header.text === 'social' ? setSocial : setAvailability;

    return (
        <div className={styles.profile__element}>
            <h3 className={`${styles.profile__title}`}>{header.text}</h3>
            {adjacent.type === 'button' ? (
                <Button
                    className={styles['profile__' + header.text]}
                    delayEvent={false}
                    handleButton={() => {
                        handleOpenModal(setStatusModal);
                        handleSoundModal();
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
