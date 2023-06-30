// import { AiFillHeart } from 'react-icons/ai';
import './styles.css';

const InfoMe = () => {
    const like = () => {
        const icon = document.getElementById('icon');

        icon.classList.add('like');

        setTimeout(() => {
            icon.classList.remove('like');
        }, 1000);
    };

    return (
        <article className="art">
            <img
                src="/17_logo_icon_white.svg"
                alt="logo"
                className="img"
                id="img"
                onDoubleClick={like}
            />
            {/* <img src="/corazon.png" alt="corazon"  /> */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-heart-filled"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                id="icon"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                    d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
                    strokeWidth="0"
                    fill="#000000"
                ></path>
            </svg>
        </article>
    );
};

export default InfoMe;
