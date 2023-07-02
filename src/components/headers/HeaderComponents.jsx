/* eslint-disable react/prop-types */
import { useState } from 'react';
import './styles/headersComponents.css';
import { CgMenuGridO } from 'react-icons/cg';
import { MdOutlineClose } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';
import { CiMenuKebab } from 'react-icons/ci';
import { BsMoonStarsFill, BsSun } from 'react-icons/bs';
import {
    BsGithub,
    BsYoutube,
    BsDiscord,
    BsTwitter,
    BsInstagram,
    BsFacebook,
} from 'react-icons/bs';

const HeaderComponents = ({ menuBar, setMenuBar, open, setOpen }) => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClose = () => {
        setMenuBar(!menuBar);
        setOpen(!open);
    };

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className="navBar">
            <div className="container-logo">
                <a href="/" className="img-logo">
                    <img
                        src="/17_logo_icon_white.svg"
                        alt="logo"
                        aria-label="logo-marca"
                    />
                    <span className="name">Guia GaboDev</span>
                </a>
            </div>
            <div className="menu__bar" onClick={handleClose}>
                <span className={`menu__icon ${menuBar ? 'active' : ''}`}>
                    <CgMenuGridO />
                </span>
                <span className={`menu__icon ${menuBar ? '' : 'active'}`}>
                    <MdOutlineClose />
                </span>
            </div>
            <div className="menu__desktop-icon">
                <CiMenuKebab />
            </div>
            <div className="content__utils desktop">
                <ul className="list__items">
                    <li className="item">
                        <a href="">⭐ Curso React.js</a>
                    </li>
                    <li className="item">
                        <a href="">⭐ Curso Boostrapt 5</a>
                    </li>
                    <li className="item">
                        <a href="">⭐ Curso Vue.js</a>
                    </li>
                </ul>
                <span className="line"></span>
                <div className="dark__mode">
                    <span className="sun__logo">
                        <BsSun />
                    </span>
                    <span className="dark__logo">
                        <BsMoonStarsFill />
                    </span>
                </div>
                <span className="line"></span>
                <ul className="list__link-redes-destock">
                    <li className="link__redes">
                        <a
                            href=""
                            title="Facebook"
                            aria-label="Facebook"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <BsFacebook />
                        </a>
                    </li>
                    <li className="link__redes">
                        <a
                            href=""
                            title="Instagram"
                            aria-label="Instagram"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <BsInstagram />
                        </a>
                    </li>
                    <li className="link__redes">
                        <a
                            href=""
                            title="Twitter"
                            aria-label="Twitter"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <BsTwitter />
                        </a>
                    </li>
                    <li className="link__redes">
                        <a
                            href=""
                            title="Discord"
                            aria-label="Discord"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <BsDiscord />
                        </a>
                    </li>
                    <li className="link__redes">
                        <a
                            href=""
                            title="Youtube"
                            aria-label="Youtube"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <BsYoutube />
                        </a>
                    </li>
                    <li className="link__redes">
                        <a
                            href=""
                            title="Github"
                            aria-label="Github"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <BsGithub />
                        </a>
                    </li>
                </ul>
            </div>
            <div className={`menuExtra__redes-movile ${open ? 'open' : ''}`}>
                <ul className="list__items movile">
                    <li className="item">
                        <a href="">
                            ⭐ Curso React.js{' '}
                            <AiOutlineLink className="external__link-icon" />
                        </a>
                    </li>
                    <li className="item">
                        <a href="">
                            ⭐ Curso Boostrapt 5
                            <AiOutlineLink className="external__link-icon" />
                        </a>
                    </li>
                    <li className="item">
                        <a href="">
                            ⭐ Curso Vue.js
                            <AiOutlineLink className="external__link-icon" />
                        </a>
                    </li>
                </ul>
                <div className="dark__mode movile">
                    <p className="appearance">Appearance</p>
                    <div className="content__dark" onClick={handleDarkMode}>
                        <span
                            className={`sun__logo icon-dark ${
                                darkMode ? 'active' : ''
                            }`}
                        >
                            <BsSun />
                        </span>
                        <span
                            className={`moon__logo icon-dark ${
                                darkMode ? '' : 'active'
                            }`}
                        >
                            <BsMoonStarsFill />
                        </span>
                    </div>
                </div>
                <ul className="list__link-redes-movile">
                    <li className="link__redes">
                        <a
                            href=""
                            title="Facebook"
                            aria-label="Facebook"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <BsFacebook />
                        </a>
                    </li>
                    <li className="link__redes">
                        <a
                            href=""
                            title="Instagram"
                            aria-label="Instagram"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <BsInstagram />
                        </a>
                    </li>
                    <li className="link__redes">
                        <a
                            href=""
                            title="Twitter"
                            aria-label="Twitter"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <BsTwitter />
                        </a>
                    </li>
                    <li className="link__redes">
                        <a
                            href=""
                            title="Discord"
                            aria-label="Discord"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <BsDiscord />
                        </a>
                    </li>
                    <li className="link__redes">
                        <a
                            href=""
                            title="Youtube"
                            aria-label="Youtube"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <BsYoutube />
                        </a>
                    </li>
                    <li className="link__redes">
                        <a
                            href=""
                            title="Github"
                            aria-label="Github"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <BsGithub />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default HeaderComponents;
