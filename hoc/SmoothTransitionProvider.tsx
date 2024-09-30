'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { Variants } from 'framer-motion';

interface PageTransition {
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

const pageTransition: PageTransition = {
    duration: 0.2,
};

export default function SmoothTransitionProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const path = usePathname();

    return (
        <>
            <motion.div
                key={path}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ height: '100%' }}
            >
                {children}
            </motion.div>
        </>
    );
}
