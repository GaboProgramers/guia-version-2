import { useState } from 'react';
import './App.css';
import HeaderComponents from './components/headers/HeaderComponents';
import Home from './components/home/Home';
import CoffeMe from './components/CoffeMe';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import StartedOO from './routes/StartedOO';
import JavascriptReact from './routes/JavascriptReact';

function App() {
    const [menuBar, setMenuBar] = useState(false);
    const [open, setOpen] = useState(false);
    const [openAside, setOpenAside] = useState(false);

    return (
        <div className="App">
            <div
                className={`${open ? 'overlay' : ''}`}
                onClick={() => {
                    setOpen(false);
                    setMenuBar(false);
                }}
            ></div>
            <header className="header">
                <HeaderComponents
                    menuBar={menuBar}
                    setMenuBar={setMenuBar}
                    open={open}
                    setOpen={setOpen}
                />
            </header>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <section className="home__container">
                                <Home />
                                <CoffeMe />
                            </section>
                        </>
                    }
                />
                <Route
                    path="/00-started"
                    element={
                        <StartedOO
                            openAside={openAside}
                            setOpenAside={setOpenAside}
                        />
                    }
                />
                <Route
                    path="/00-started/Javascrip-react"
                    element={<JavascriptReact />}
                />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;

{
    /* <div className="switch">
            <input id="toggle__switch" type="checkbox" />
            <label htmlFor="toggle__switch"></label>
        </div> */
}
