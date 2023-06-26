/* eslint-disable react/prop-types */
const Items = ({ icon, title }) => {
    return (
        <div className="home-item">
            <div className="home-icon">{icon}</div>
            <h3 className="home__title-item">{title}</h3>
        </div>
    );
};

export default Items;
