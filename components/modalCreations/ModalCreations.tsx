'use client';

import React from 'react';
import Image from 'next/image';
import stopPropagation from '@/helpers/stopPropagation';
import useModal from '../../hooks/useModal';
import useSlider from '@/hooks/useSlider';
import styles from '@/styles/components/modalCreations/ModalCreations.module.scss';
import { ModalVectorLeft, ModalVectorRight } from '../svgIcon/SvgIcon';
import { creationsSelector } from '@/redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export default function ModalCreations(): React.JSX.Element {
    const close = useModal('creations').close;
    const { targetProject, projectImages, projects } = useSelector(creationsSelector);

    const slider = React.useRef<HTMLDivElement | null>(null);
    const vectorLeft = React.useRef<SVGSVGElement | null>(null);
    const vectorRight = React.useRef<SVGSVGElement | null>(null);
    const countSlider = useSlider(slider, vectorLeft.current, vectorRight.current);

    const enter = (event: KeyboardEvent): void => {
        if (event.key === 'Enter') window.open(projects[targetProject].link, '_blank');
    };

    React.useEffect(() => {
        document.documentElement.style.setProperty('--bg-creations-modal', projects[targetProject].backgroundColor);
        window.addEventListener('keydown', enter);

        return () => window.removeEventListener('keydown', enter);
    }, []);

    return (
        <section className={styles.modal} onClick={close}>
            <div className={styles.modal__inner} onClick={stopPropagation}>
                <div className={styles.modal__header}>
                    <h3 className={styles.modal__subtitle}>previewing images from</h3>
                    <h2 className={styles.modal__title}>{projects[targetProject].name}</h2>
                </div>

                <div className={styles.modal__content_wrapper}>
                    <ModalVectorLeft
                        className={`${styles.vector} ${styles.vector__left} ${countSlider === 0 ? styles.vector__deactive : ''}`}
                        ref={vectorLeft}
                    />
                    <div className={styles.modal__content}>
                        <div className={styles.modal__content_inner} ref={slider}>
                            {projectImages.map((image) => {
                                return (
                                    <div className={styles.modal__item} key={nanoid()}>
                                        <Image
                                            alt={image.name}
                                            className={styles.modal__item_img}
                                            draggable="false"
                                            height={image.height}
                                            key={nanoid()}
                                            src={`/assets/images/${image.name}`}
                                            width={image.width}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <ModalVectorRight
                        className={`${styles.vector} ${styles.vector__right} ${countSlider === projectImages.length - 1 ? styles.vector__deactive : ''}`}
                        ref={vectorRight}
                    />
                </div>

                <div className={styles.button_wrapper}>
                    <a className={styles.button_wrapper__enter} href={projects[targetProject].link} target="_blank">
                        view project live
                    </a>
                    <span className={styles.button_wrapper__count}>
                        {countSlider + 1} of {projectImages.length}
                    </span>
                    <button className={styles.button_wrapper__escape} onClick={close} type="button">
                        {'CLOSE [esc]'}
                    </button>
                </div>
            </div>
        </section>
    );
}
