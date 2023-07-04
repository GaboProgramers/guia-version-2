/* eslint-disable react/prop-types */
import { BiCategory } from 'react-icons/bi';

const SecondMenu = ({ setOpenAside }) => {
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
        <nav className="navBar__aside">
            <ul className="navBar__items">
                <li className="navBar__item">
                    <button className="navBar__btn" onClick={handleOpenAside}>
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
    );
};

export default SecondMenu;
