/* eslint-disable react/prop-types */
import ArticleDragable from './ArticleDragable';
import './styles/asideNavBar.css';
import { SlClose } from 'react-icons/sl';

const AsideNavBar = ({ setOpenAside }) => {
    return (
        <aside className="aside__container">
            <span className="close__icon" onClick={() => setOpenAside(false)}>
                <SlClose />
            </span>
            <ArticleDragable setOpenAside={setOpenAside} />
        </aside>
    );
};

export default AsideNavBar;
