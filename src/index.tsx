import { App } from './components/app/App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import About from './components/about/About';
import Achievements from './components/achievements/Achievements';
import Beginning from './components/beginning/Beginning';
import Creations from './components/creations/Creations';
import ErrorPage from './components/errorPage/ErrorPage';
import Games from './components/games/Games';
import GameSnake from './components/gameSnake/GameSnake';
import Logs from './components/logs/Logs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './components/welcome/Welocme';
import './css/index.scss';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root')!);
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<Welcome />} />
            <Route path="beginning" element={<Beginning />} />
            <Route path="logs" element={<Logs />} />
            <Route path="achievements" element={<Achievements />} />
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
        <RouterProvider router={router} />;
    </React.StrictMode>,
);
