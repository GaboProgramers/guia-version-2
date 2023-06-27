import './styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="copy">
                <p className="text-copy">
                    &copy; Todos Los Derechos Reservados.
                </p>
                <span className="date">{new Date().getFullYear()}</span>
            </div>
        </footer>
    );
};

export default Footer;
