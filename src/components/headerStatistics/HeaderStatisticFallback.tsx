import React from 'react';
import { IStatistics } from '../../interfaces/interface.component';
import { Triangle } from 'react-loader-spinner';

const HeaderStatisticsFallback = (props: IStatistics): React.JSX.Element => {
    const { styles } = props;

    return (
        <>
            <div className={styles.level__box}>
                <Triangle
                    ariaLabel="triangle-loading"
                    color=""
                    height="32"
                    visible={true}
                    width="32"
                    wrapperClass={styles.loader}
                    wrapperStyle={{}}
                />
                <span>level</span>
            </div>
            <div className={styles.coins}>
                <div className={styles.coins__add_box}>
                    <button type="button" className={`${styles.coins__btn} ${styles.coins__btn_deactive}`}>
                        +
                    </button>
                </div>
                <div className={styles.coins__text_box}>
                    <Triangle
                        ariaLabel="triangle-loading"
                        color=""
                        height="32"
                        visible={true}
                        width="32"
                        wrapperClass={styles.loader}
                        wrapperStyle={{}}
                    />
                    <span>coins awarded</span>
                </div>
            </div>
        </>
    );
};

export { HeaderStatisticsFallback };

// import React from 'react';
// import { IStatistics } from '../../interfaces/interface.component';
// import { routerHash } from '../../classes/RouterHash';
// import { Triangle } from 'react-loader-spinner';

// const HeaderStatisticsFallback = (props: IStatistics): React.JSX.Element => {
//     const { styles } = props;

//     return (
//         <>

//             <div className={styles.coins}>
//                 <div className={styles.coins__add_box}>
//                     <button
//                         type="button"
//                         className={`${styles.coins__btn} ${routerHash.has('addStatus') ? (!routerHash.dehash('addStatus') ? styles.coins__btn_pulse : '') : ''}`}
//                     >
//                         +
//                     </button>
//                     {routerHash.has('addStatus') ? (
//                         !routerHash.dehash('addStatus') ? (
//                             <div className={styles.pulse}></div>
//                         ) : null
//                     ) : null}
//                 </div>
//                 <div className={styles.coins__text_box}>
//                     {routerHash.has('coins') ? (
//                         <span className={styles.coins__text}>{routerHash.dehash('coins')}</span>
//                     ) : (
//                         <Triangle
//                             ariaLabel="triangle-loading"
//                             color=""
//                             height="32"
//                             visible={true}
//                             width="32"
//                             wrapperClass={styles.loader}
//                             wrapperStyle={{}}
//                         />
//                     )}
//                     <span>coins awarded</span>
//                 </div>
//             </div>
//         </>
//     );
// };

// export { HeaderStatisticsFallback };
