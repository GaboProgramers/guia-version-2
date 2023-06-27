import { useState } from 'react';
import './App.css';
import HeaderComponents from './components/headers/HeaderComponents';
import Home from './components/home/Home';
import CoffeMe from './components/CoffeMe';
import Footer from './components/footer/Footer';

function App() {
    const [menuBar, setMenuBar] = useState(false);
    const [open, setOpen] = useState(false);

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
            <section className="home__container">
                <Home />
            </section>
            <CoffeMe />
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
