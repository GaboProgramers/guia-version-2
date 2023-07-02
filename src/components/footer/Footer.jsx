import { useState } from 'react';
import './styles/footer.css';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState();
    const [getDate, setGetDate] = useState();

    const getDateTime = () => {
        let f = new Date();
        let day = f.getDate();
        let month = f.getMonth() + 1;
        let year = f.getFullYear();
        let dayWeek = f.getDay();

        day = ('0' + day).slice(-2);
        month = ('0' + month).slice(-2);

        let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

        const dateWeek = week[dayWeek];
        const timeString = f.toLocaleTimeString();
        setCurrentTime(timeString);
        setGetDate(`${year}-${month}-${day} ${dateWeek}`);
    };

    setInterval(() => {
        getDateTime();
    }, 1000);

    return (
        <footer className="footer">
            <div className="copy">
                <p className="text-copy">
                    &copy; Todos Los Derechos Reservados.
                </p>
                <span className="date">{new Date().getFullYear()}</span>
            </div>
            <div className="date-content">
                <div className="current__date">{getDate}</div>
                <span className="hours">{currentTime}</span>
            </div>
        </footer>
    );
};

export default Footer;
