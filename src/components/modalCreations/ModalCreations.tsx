import React from 'react';
import projects from '../../assets/json/projects.json';
import vectorImageLeft from '../../assets/images/vector-left.svg';
import vectorImageRight from '../../assets/images/vector-right.svg';
import styles from './ModalCreations.module.scss';
import { creationsSelector } from '../../store/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { soundsModalTrigger } from '../../store/slices/soundsSlice';
import { stateModalSelector } from '../../store/selectors';
import { stopPropagation } from '../../utils/stopPropagation';
import { useDispatch } from 'react-redux';
import { useModal } from '../../hooks/useModal';
import { useSelector } from 'react-redux';
import { useSlider } from '../../hooks/useSlider';

const ModalCreations = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const closeModalCreations = useModal('creations').close;
    const { delay } = useSelector(stateModalSelector);
    const { targetProject, projectImages } = useSelector(creationsSelector);

    const slider = React.useRef<HTMLDivElement | null>(null);
    const vectorLeft = React.useRef<HTMLImageElement | null>(null);
    const vectorRight = React.useRef<HTMLImageElement | null>(null);
    const countSlider = useSlider(slider, vectorLeft, vectorRight);

    const enter = (event: KeyboardEvent): void => {
        if (event.key === 'Enter')
            window.open(projects[targetProject].link, '_blank');
    };

    const close = () => {
        closeModalCreations();

        const isDelayEnd = Object.values(delay).some((modalDelay) => {
            return modalDelay === true;
        });

        if (isDelayEnd) dispatch(soundsModalTrigger());
    };

    React.useEffect(() => {
        document.documentElement.style.setProperty(
            '--bg-creations-modal',
            projects[targetProject].backgroundColor,
        );
        window.addEventListener('keydown', enter);

        return () => window.removeEventListener('keydown', enter);
    }, []);

    return (
        <div className={styles.modal} onClick={closeModalCreations}>
            <div className={styles.modal__inner} onClick={stopPropagation}>
                <div className={styles.modal__header}>
                    <h3 className={styles.modal__subtitle}>
                        previewing images from
                    </h3>
                    <h2 className={styles.modal__title}>
                        {projects[targetProject].name}
                    </h2>
                </div>

                <div className={styles.modal__content_wrapper}>
                    <img
                        alt="vector"
                        className={`${styles.vector} ${styles.vector__left} ${countSlider === 0 ? styles.vector__deactive : ''}`}
                        draggable="false"
                        ref={vectorLeft}
                        src={vectorImageLeft}
                    />
                    <div className={styles.modal__content}>
                        <div
                            className={styles.modal__content_inner}
                            ref={slider}
                        >
                            {projectImages.map((imageName) => {
                                return (
                                    <div
                                        className={styles.modal__item}
                                        key={nanoid()}
                                    >
                                        <img
                                            alt={imageName}
                                            className={styles.modal__item_img}
                                            draggable="false"
                                            key={nanoid()}
                                            src={require(
                                                '../../assets/images/' +
                                                    imageName,
                                            )}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <img
                        alt="vector"
                        className={`${styles.vector} ${styles.vector__right} ${countSlider === projectImages.length - 1 ? styles.vector__deactive : ''}`}
                        draggable="false"
                        ref={vectorRight}
                        src={vectorImageRight}
                    />
                </div>

                <div className={styles.button_wrapper}>
                    <a
                        className={styles.button_wrapper__enter}
                        href={projects[targetProject].link}
                        target="_blank"
                    >
                        view project live
                    </a>
                    <span className={styles.button_wrapper__count}>
                        {countSlider + 1} of {projectImages.length}
                    </span>
                    <button
                        className={styles.button_wrapper__escape}
                        onClick={close}
                        type="button"
                    >
                        {'CLOSE [esc]'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export { ModalCreations };
