import { useState } from 'react';
import './App.css';
import HeaderComponents from './components/headers/HeaderComponents';
import Home from './components/home/Home';

function App() {
    const [menuBar, setMenuBar] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <div>
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
            <section className="home__container">
                <Home />
            </section>
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
