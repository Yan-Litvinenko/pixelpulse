import React from 'react';
import useSlider from '../../hooks/useSlider';
import useCloseModal from '../../hooks/useCloseModal';
import Button from '../button/Button';
import { ContextApp } from '../app/App';
import { IContextApp } from '../../interfaces/interface';
import vectorImageRight from '../../assets/images/vector-right.svg';
import vectorImageLeft from '../../assets/images/vector-left.svg';
import projects from '../../assets/json/projects.json';
import styles from './ModalCreations.module.scss';

const ModalCreations = (): React.JSX.Element => {
    const contextApp: IContextApp | null = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const { setCreations, modalProject, projectImages } = contextApp;

    const modal = React.useRef<HTMLDivElement | null>(null);
    const slider = React.useRef<HTMLDivElement | null>(null);
    const vectorLeft = React.useRef<HTMLImageElement | null>(null);
    const vectorRight = React.useRef<HTMLImageElement | null>(null);
    const countSlider = useSlider(slider, vectorLeft, vectorRight);
    const handleCloseModal = useCloseModal(modal, setCreations, false, false, false);

    const enter = (event: KeyboardEvent): void => {
        if (event.key === 'Enter') {
            window.open(projects[modalProject].link, '_blank');
        }
    };

    React.useEffect(() => {
        window.addEventListener('keydown', enter);

        return () => {
            window.removeEventListener('keydown', enter);
        };
    }, []);

    return (
        <div className={styles.modal} ref={modal}>
            <div className={styles.modal__inner}>
                <div className={styles.modal__header}>
                    <h3 className={styles.modal__subtitle}>previewing images from</h3>
                    <h2 className={styles.modal__title}>{projects[modalProject].name}</h2>
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
                        <div className={styles.modal__content_inner} ref={slider}>
                            {projectImages.map((imageName, index) => {
                                return (
                                    <div className={styles.modal__item}>
                                        <img
                                            alt={imageName}
                                            className={styles.modal__item_img}
                                            draggable="false"
                                            key={index}
                                            src={require('../../assets/images/' + imageName)}
                                        />
                                        <img
                                            alt={imageName}
                                            className={styles.modal__item_bg}
                                            draggable="false"
                                            key={index}
                                            src={require('../../assets/images/' + imageName)}
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
                    <a className={styles.button_wrapper__enter} href={projects[modalProject].link} target="_blank">
                        view project live
                    </a>
                    <span className={styles.button_wrapper__count}>
                        {countSlider + 1} of {projectImages.length}
                    </span>
                    <Button
                        className={styles.button_wrapper__escape}
                        delayEvent={true}
                        handleButton={handleCloseModal}
                        textContent={'CLOSE [esc]'}
                        type="button"
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalCreations;
