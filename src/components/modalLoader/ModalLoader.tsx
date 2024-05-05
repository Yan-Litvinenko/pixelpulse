import React from 'react';
import { Triangle } from 'react-loader-spinner';
import styles from './ModalLoader.module.scss';

const ModalLoader = (): React.JSX.Element => {
    return (
        <div className={styles.loader}>
            <div className={styles.loader__inner}>
                <Triangle
                    visible={true}
                    height="80"
                    width="80"
                    color="rgb(232, 74, 74)"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass={styles.loader__triangle}
                />
            </div>
        </div>
    );
};

export default ModalLoader;
