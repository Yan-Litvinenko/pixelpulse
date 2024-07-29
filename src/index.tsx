import React from 'react';
import ReactDOM from 'react-dom/client';
import { About } from './components/about/About';
import { Achievements } from './components/achievements/Achievements';
import { App } from './components/app/App';
import { Beginning } from './components/beginning/Beginning';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';
import { Creations } from './components/creations/Creations';
import { CreationsXplorerContent } from './components/creationsXplorerContent/CreationsXplorerContent';
import { ErrorPage } from './components/errorPage/ErrorPage';
import { Games } from './components/games/Games';
import { GameSnake } from './components/gameSnake/GameSnake';
import { Logs } from './components/logs/Logs';
import { logsLoader } from './components/logs/logsLoader';
import { Welcome } from './components/welcome/Welocme';
import './css/index.scss';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root')!);
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route id="app" path="/" element={<App />}>
            <Route index element={<Welcome />} />
            <Route path="beginning" element={<Beginning />} />
            <Route path="logs" element={<Logs />} loader={logsLoader} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="creations" element={<Creations />}>
                <Route index element={<CreationsXplorerContent />} />
                <Route path=":projectName" element={<CreationsXplorerContent />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="games" element={<Games />}>
                <Route path="snake" element={<GameSnake />} />
            </Route>
            <Route path="error" element={<ErrorPage status="404" detail="page not found" />} />
            <Route path="*" element={<Navigate to={'error'} />} />
        </Route>,
    ),
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
