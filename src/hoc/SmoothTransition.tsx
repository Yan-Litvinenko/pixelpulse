import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface ISmoothTransition {
    children: React.ReactNode;
}

interface IPageTransition {
    duration: number;
}

const pageVariants: Variants = {
    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    },
};

const pageTransition: IPageTransition = {
    duration: 0.2,
};

const SmoothTransition = (props: ISmoothTransition): React.JSX.Element => {
    const { children } = props;
    const location = useLocation();

    return (
        <>
            <motion.div
                key={location.pathname}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                {children}
            </motion.div>
        </>
    );
};

export { SmoothTransition };
