import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Root from './Root.jsx';
import Background from './components/Background.jsx';
import Presentism from './components/Presentism.jsx';
import Block from './components/Block.jsx';
import GrowingBlock from './components/GrowingBlock.jsx';
import MovingSpotlight from './components/MovingSpotlight.jsx';
import TimeTravel from './components/TimeTravel.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "background",
        element: <Background />,
      },
      {
        path: "presentism",
        element: <Presentism />,
      },
      {
        path: "growing-block",
        element: <GrowingBlock />,
      },
      {
        path: "moving-spotlight",
        element: <MovingSpotlight />,
      },
      {
        path: "block",
        element: <Block />,
      },
      {
        path: "time-travel",
        element: <TimeTravel />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
