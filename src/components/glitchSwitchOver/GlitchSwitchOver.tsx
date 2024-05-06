// import React from 'react';
// import styles from './GlitchSwitchOver.module.scss';

// const GlitchSwitchOver = (): React.JSX.Element => {
//     const trContainerRef = React.useRef<HTMLDivElement | null>(null);

//     React.useEffect(() => {
//         if (trContainerRef.current) {
//             const trElements: NodeListOf<HTMLDivElement> = trContainerRef.current.querySelectorAll('div');

//             setTimeout(() => {
//                 trElements.forEach((item) => {
//                     item.style.opacity = '1';
//                 });
//             }, 100);

//             setTimeout(() => {
//                 if (trContainerRef.current) {
//                     trContainerRef.current.style.zIndex = '-1';
//                 }
//             }, 1000);

//             trContainerRef.current.style.zIndex = '100';

//             trElements.forEach((item) => {
//                 (item as HTMLDivElement).style.opacity = '0';
//             });
//         }
//     }, [trContainerRef]);

//     return (
//         <div className={styles.trCont} ref={trContainerRef}>
//             <div className={`${styles.tr1} ${styles.tr}`}></div>
//             <div className={`${styles.tr1} ${styles.tr}`}></div>
//             <div className={`${styles.tr2} ${styles.tr}`}></div>
//             <div className={`${styles.tr3} ${styles.tr}`}></div>
//             <div className={`${styles.tr1} ${styles.tr}`}></div>
//             <div className={`${styles.tr3} ${styles.tr}`}></div>
//             <div className={`${styles.tr1} ${styles.tr}`}></div>
//             <div className={`${styles.tr3} ${styles.tr}`}></div>

//             <div className={`${styles.tr2} ${styles.tr}`}></div>
//             <div className={`${styles.tr2} ${styles.tr}`}></div>
//             <div className={`${styles.tr1} ${styles.tr}`}></div>
//             <div className={`${styles.tr2} ${styles.tr}`}></div>
//             <div className={`${styles.tr2} ${styles.tr}`}></div>
//             <div className={`${styles.tr1} ${styles.tr}`}></div>
//             <div className={`${styles.tr3} ${styles.tr}`}></div>
//             <div className={`${styles.tr2} ${styles.tr}`}></div>

//             <div className={`${styles.tr3} ${styles.tr}`}></div>
//             <div className={`${styles.tr1} ${styles.tr}`}></div>
//             <div className={`${styles.tr2} ${styles.tr}`}></div>
//             <div className={`${styles.tr1} ${styles.tr}`}></div>
//             <div className={`${styles.tr2} ${styles.tr}`}></div>
//             <div className={`${styles.tr3} ${styles.tr}`}></div>
//             <div className={`${styles.tr3} ${styles.tr}`}></div>
//             <div className={`${styles.tr1} ${styles.tr}`}></div>
//         </div>
//     );
// };

// export default GlitchSwitchOver;
