import React from 'react';
import ModalCreditsElement from '@/components/modalCreditsElement/ModalCreditsElement';
import stopPropagation from '@/helpers/stopPropagation';
import useModal from '@/hooks/useModal';
import styles from '@/styles/components/modalCredits/ModalCredits.module.scss';

export default function ModalCredits(): React.JSX.Element {
    const closeModalCredits = useModal('credits').close;

    return (
        <div className={styles.modal} onClick={closeModalCredits}>
            <div className={styles.modal__inner} onClick={stopPropagation}>
                <h3 className={styles.modal__title}>Credits</h3>
                <h4 className={styles.modal__subtitle}>Everything involved in this project</h4>
                <div className={styles.modal__line}></div>
                <div className={styles.modal__content}>
                    <ModalCreditsElement title={'developed by'} text={'Yan Litvinenko'} />
                    <ModalCreditsElement
                        title={'designed by'}
                        text={['homepage view, achievements by midjourney', 'hexagons by Yan Litvinenko']}
                    />
                    <ModalCreditsElement title={'visual assets'} text={'Yan Litvinenko'} />
                    <ModalCreditsElement
                        title={'audio effects'}
                        text={[
                            'the sound of a modal window opening and the sound of “noise” taken from the site zvukipro.com',
                            'click sound from world of warcraft',
                        ]}
                    />
                    <ModalCreditsElement title={'music'} text={['Nier: Automata', 'Snake Rattle N Roll']} />
                </div>
            </div>
        </div>
    );
}
