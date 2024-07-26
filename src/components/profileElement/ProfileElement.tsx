import React from 'react';
import { Bluetooth, Hexagon } from '../svgIcon/SvgIcon';
import { IProfileElement } from '../../interfaces/interface.component';
import { useModal } from '../../hooks/useModal';
import styles from './ProfileElement.module.scss';

const ProfileElement = (props: IProfileElement): React.JSX.Element => {
    const { adjacent, header } = props;
    const { openModal } = useModal(header.text === 'social' ? 'social' : 'availability');

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
