import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import About from '../about/About';
import Achievements from '../achievements/Achievements';
import Beginning from '../beginning/Beginning';
import Creations from '../creations/Creations';
import ErrorPage from '../errorPage/ErrorPage';
import Games from '../games/Games';
import GameSnake from '../gameSnake/GameSnake';
import Logs from '../logs/Logs';
import Welcome from '../welcome/Welocme';

const pageVariants = {
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

const pageTransition = {
    duration: 0.1,
};

const AnimatedRoutes = (): React.JSX.Element => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Welcome />} />
                <Route
                    path="about"
                    element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <About />
                        </motion.div>
                    }
                />
                <Route
                    path="beginning"
                    element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <Beginning />
                        </motion.div>
                    }
                />
                <Route
                    path="logs"
                    element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <Logs />
                        </motion.div>
                    }
                />
                <Route
                    path="achievements"
                    element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <Achievements />
                        </motion.div>
                    }
                />
                <Route
                    path="creations"
                    element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <Creations />
                        </motion.div>
                    }
                />
                <Route path="games/*" element={<Games />}>
                    <Route
                        path="snake"
                        element={
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}
                            >
                                <GameSnake />
                            </motion.div>
                        }
                    />
                </Route>
                <Route
                    path="*"
                    element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <ErrorPage />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
