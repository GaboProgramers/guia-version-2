import './styles/home.css';
import Items from './utils/Items';
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { GrNode } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home__content">
            <div className="home__header">
                <h1 className="home__title">Gabodev</h1>
                <article>
                    <h2 className="home__subtitle">
                        Cursos Para Desarrolladores Web.
                    </h2>
                    <p className="home__paragraph">
                        Encuentra todas las guías de <span>GaboDev</span> en un
                        solo lugar ⭐.
                    </p>
                </article>
                <div className="home__btn">
                    <Link to="/00-started" className="btn">
                        Ingresar
                    </Link>
                    <Link className="btn">Ir youtube</Link>
                </div>
            </div>
            <section className="home__list-items">
                <Items icon={<ImHtmlFive />} title="HTML y CSS" />
                <Items icon={<IoLogoJavascript />} title="Javascript" />
                <Items icon={<FaReact />} title="React y Vue" />
                <Items icon={<GrNode />} title="Node.js" />
            </section>
        </div>
    );
};

export default Home;
