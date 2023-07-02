import { BiCategory } from 'react-icons/bi';
import './styles/started.css';
import AsideNavBar from '../components/aside/AsideNavBar';
import { useState } from 'react';

const StartedOO = () => {
    const [openAside, setOpenAside] = useState(false);

    const handleOpenAside = () => {
        setOpenAside(true);
    };

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="started__container">
            <nav className="navBar__aside">
                <ul className="navBar__items">
                    <li className="navBar__item">
                        <button
                            className="navBar__btn"
                            onClick={handleOpenAside}
                        >
                            <span className="navBar__icon">
                                <BiCategory />
                            </span>
                            <span className="navBar__title">Menu</span>
                        </button>
                    </li>
                    <li className="navBar__item">
                        <span onClick={scrollUp}>Inico</span>
                    </li>
                </ul>
            </nav>
            <div className={`navBar-aside ${openAside ? 'open' : ''}`}>
                <AsideNavBar setOpenAside={setOpenAside} />
            </div>
        </div>
    );
};

export default StartedOO;
