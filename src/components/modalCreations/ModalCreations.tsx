import React from 'react';
import useSlider from '../../hooks/useSlider';
import useCloseModalAndKey from '../../hooks/useCloseModalAndKey';
import Heading from '../heading/Heading';
import ModalBoxButton from '../modalBoxButton/ModalBoxButton';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import vectorImageRight from '../../assets/images/vector-right.svg';
import vectorImageLeft from '../../assets/images/vector-left.svg';
import styles from './ModalCreations.module.scss';

const ModalCreations = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);
    const modal = React.useRef<HTMLDivElement | null>(null);
    const slider = React.useRef<HTMLDivElement | null>(null);
    const vectorLeft = React.useRef<HTMLImageElement | null>(null);
    const vectorRight = React.useRef<HTMLImageElement | null>(null);
    const countSlider = useSlider(slider, vectorLeft, vectorRight);

    if (!contextApp) return <></>;

    useCloseModalAndKey(modal, contextApp.setCreations, false, false, false);

    return (
        <div className={styles.modal} ref={modal}>
            <div className={styles.modal__header}>
                <Heading className={styles.modal__subtitle} level="3" textContent="previewing images from" />
                <Heading className={styles.modal__title} level="2" textContent="portfolio design" />
            </div>

            <div className={styles.modal__content_wrapper}>
                <img
                    alt="vector"
                    className={`${styles.vector} ${styles.vector__left} ${countSlider === 0 ? styles.vector__deactive : ''}`}
                    ref={vectorLeft}
                    src={vectorImageLeft}
                />
                <div className={styles.modal__content}>
                    <div className={styles.modal__content_inner} ref={slider}>
                        {contextApp.projectImages.map((imageName, index) => (
                            <img
                                alt={imageName}
                                className={styles.modal__item}
                                key={index}
                                src={require('../../assets/images/' + imageName)}
                            />
                        ))}
                    </div>
                </div>
                <img
                    alt="vector"
                    className={`${styles.vector} ${styles.vector__right} ${countSlider === contextApp.projectImages.length - 1 ? styles.vector__deactive : ''}`}
                    ref={vectorRight}
                    src={vectorImageRight}
                />
            </div>

            <div className={styles.box_wrapper}>
                <span className={styles.box_wrapper__count}>
                    {countSlider + 1} of {contextApp.projectImages.length}
                </span>
                <ModalBoxButton
                    setModalStatus={contextApp?.setCreations}
                    textEnter="view project live"
                    textEsc="close [esc]"
                    typeEnter="button"
                />
            </div>
        </div>
    );
};

export default ModalCreations;
