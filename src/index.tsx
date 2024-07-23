import { About } from './components/about/About';
import { Achievements } from './components/achievements/Achievements';
import { achievementsLoader } from './components/achievements/achievementsLoader';
import { App } from './components/app/App';
import { appLoader } from './components/app/appLoader';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Logs } from './components/logs/Logs';
import { logsLoader } from './components/logs/logsLoader';
import { Beginning } from './components/beginning/Beginning';
import Creations from './components/creations/Creations';
import ErrorPage from './components/errorPage/ErrorPage';
import Games from './components/games/Games';
import GameSnake from './components/gameSnake/GameSnake';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './components/welcome/Welocme';
import './css/index.scss';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root')!);
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} loader={appLoader}>
            <Route path="/" element={<Welcome />} />
            <Route path="beginning" element={<Beginning />} />
            <Route path="logs" element={<Logs />} loader={logsLoader} />
            <Route path="achievements" element={<Achievements />} loader={achievementsLoader} />
            <Route path="creations" element={<Creations />} />
            <Route path="about" element={<About />} />
            <Route path="games" element={<Games />}>
                <Route path="snake" element={<GameSnake />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
        </Route>,
    ),
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
