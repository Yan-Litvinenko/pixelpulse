import React from 'react';
import useSlider from '../../hooks/useSlider';
import useCloseModal from '../../hooks/useCloseModal';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import { ContextApp } from '../app/App';
import { IAppContext } from '../../interfaces/interface';
import vectorImageRight from '../../assets/images/vector-right.svg';
import vectorImageLeft from '../../assets/images/vector-left.svg';
import projects from '../../assets/json/projects.json';
import styles from './ModalCreations.module.scss';

const ModalCreations = (): React.JSX.Element => {
    const contextApp: IAppContext | undefined = React.useContext(ContextApp);

    if (!contextApp) return <></>;

    const modal = React.useRef<HTMLDivElement | null>(null);
    const slider = React.useRef<HTMLDivElement | null>(null);
    const vectorLeft = React.useRef<HTMLImageElement | null>(null);
    const vectorRight = React.useRef<HTMLImageElement | null>(null);
    const countSlider = useSlider(slider, vectorLeft, vectorRight);
    const handleCloseModal = useCloseModal(modal, contextApp.setCreations, false, false, false);

    const handleEnter = (event: KeyboardEvent): void => {
        if (event.key === 'Enter') {
            window.open(projects[contextApp.modalProject].link, '_blank');
        }
    };

    React.useEffect(() => {
        window.addEventListener('keydown', handleEnter);

        return () => {
            window.removeEventListener('keydown', handleEnter);
        };
    }, []);

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

            <div className={styles.button_wrapper}>
                <a
                    className={styles.button_wrapper__enter}
                    href={projects[contextApp.modalProject].link}
                    target="_blank"
                >
                    view project live
                </a>
                <span className={styles.button_wrapper__count}>
                    {countSlider + 1} of {contextApp.projectImages.length}
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
    );
};

export default ModalCreations;
