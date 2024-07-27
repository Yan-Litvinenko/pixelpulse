import React from 'react';
import { Bluetooth, Hexagon } from '../svgIcon/SvgIcon';
import { IProfileElement } from '../../interfaces/interface.component';
import styles from './ProfileElement.module.scss';
import { useAppContext } from '../../hooks/useAppContext';

const ProfileElement = (props: IProfileElement): React.JSX.Element => {
    const { adjacent, header } = props;
    const { social, availability } = useAppContext();
    const openModal = header.text === 'social' ? social.openModal : availability.openModal;

    return (
        <div className={styles.profile__element}>
            <h3 className={`${styles.profile__title}`}>{header.text}</h3>
            {adjacent.type === 'button' ? (
                <button className={styles['profile__' + header.text]} onClick={openModal} type="button">
                    {adjacent.text}
                    {adjacent.image === 'hexagon' ? <Hexagon /> : <Bluetooth />}
                </button>
            ) : (
                <span className={styles.profile__text}>{adjacent.text}</span>
            )}
        </div>
    );
};

export default ProfileElement;
