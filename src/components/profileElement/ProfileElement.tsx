import React from 'react';
import styles from './ProfileElement.module.scss';
import { Bluetooth, Hexagon } from '../svgIcon/SvgIcon';
import { useModal } from '../../hooks/useModal';
import type { IProfileElement } from '../../interfaces/interface.component';

const ProfileElement = (props: IProfileElement): React.JSX.Element => {
    const { adjacent, header, classRoot, modal } = props;
    const openModal = useModal(modal || 'availability').open;

    return (
        <div className={styles.profile__element}>
            <h3 className={`${styles.profile__title}`}>{header.text}</h3>
            {adjacent.type === 'button' ? (
                <button className={styles['profile__' + classRoot]} onClick={openModal} type="button">
                    {adjacent.text}
                    {adjacent.image === 'hexagon' ? <Hexagon /> : <Bluetooth />}
                </button>
            ) : (
                <span className={styles.profile__text}>{adjacent.text}</span>
            )}
        </div>
    );
};

export { ProfileElement };
