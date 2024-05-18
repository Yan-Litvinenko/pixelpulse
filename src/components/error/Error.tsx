import React from 'react';
import Heading from '../heading/Heading';
import Paragraph from '../paragraph/Paragraph';
import styles from './Error.module.scss';

const Error = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container} data-text="404">
                    <Heading
                        className={`${styles.title} ${styles.glitch}`}
                        data-text="404"
                        level="1"
                        textContent="404"
                    />
                    <Paragraph
                        className={`${styles.description} ${styles.glitch}`}
                        data-text="PAGE NOT FOUND"
                        textContent="PAGE NOT FOUND"
                    />
                </div>
            </div>
        </>
    );
};

export default Error;
