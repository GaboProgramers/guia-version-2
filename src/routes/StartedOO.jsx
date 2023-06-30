import { BiCategory } from 'react-icons/bi';
import './styles/started.css';

const StartedOO = () => {
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
                        <button className="navBar__btn">
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
            <div className="div">hola</div>
        </div>
    );
};

export default StartedOO;
