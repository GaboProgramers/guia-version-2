/* eslint-disable react/prop-types */
import './styles/started.css';
import AsideNavBar from '../components/aside/AsideNavBar';
import SecondMenu from '../components/SecondMenu';

const StartedOO = ({ openAside, setOpenAside }) => {
    return (
        <div className="started__container">
            <SecondMenu setOpenAside={setOpenAside} />
            <div className="content__started">
                <h2 className="content-title">Getting Started</h2>
            </div>
            <div className={`navBar-aside ${openAside ? 'open' : ''}`}>
                <AsideNavBar setOpenAside={setOpenAside} />
            </div>
        </div>
    );
};

export default StartedOO;
