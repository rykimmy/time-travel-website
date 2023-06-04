import { Link, Outlet } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import './styles.css';

export default function Root() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <header>
                <h1 id="title">The Philosophy of Time and Time Travel</h1>
                <nav>
                    <Link to="/">
                        <p className="navBar">Home</p>
                    </Link>

                    <Link to="/background">
                        <p className="navBar">Background Information</p>
                    </Link>

                    <div className="dropdown">
                        <p className="navBar dropbtn">Theories of Time</p>
                        <div className="dropContent">
                            <Link to="/presentism">
                                <p className="navBar">Presentism</p>
                            </Link>
                            <Link to="/block">
                                <p className="navBar">Block Theory</p>
                            </Link>
                            <Link to="/moving-spotlight">
                                <p className="navBar">Moving Spotlight</p>
                            </Link>
                            <Link to="/growing-block">
                                <p className="navBar">Growing Block</p>
                            </Link>
                        </div>
                    </div>

                    <Link to="/time-travel">
                        <p className="navBar">Time Travel</p>
                    </Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};