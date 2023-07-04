import { useState } from 'react';
import info from './itemsArticle.json';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ArticleDragable = ({ setOpenAside }) => {
    // eslint-disable-next-line no-unused-vars
    const [infoFet, setInfo] = useState(info);
    const [dragableIndices, setDragableIndices] = useState([]);

    const handleDragable = index => {
        const newDragableIndices = [...dragableIndices];

        if (newDragableIndices.includes(index)) {
            const indexToRemove = newDragableIndices.indexOf(index);
            newDragableIndices.splice(indexToRemove, 1);
        } else {
            newDragableIndices.push(index);
        }

        setDragableIndices(newDragableIndices);
    };

    return (
        <article className="aside__art">
            {infoFet?.map((item, index) => (
                <div
                    key={item.id}
                    className={`art__content ${
                        dragableIndices.includes(index) ? '' : 'open'
                    }`}
                >
                    <div
                        className="content__dragable"
                        onClick={() => handleDragable(index)}
                    >
                        <h4 className="art__title"> {item.title} </h4>
                        <span className="icon">
                            {dragableIndices.includes(index) ? (
                                <AiOutlineMinusSquare />
                            ) : (
                                <AiOutlinePlusSquare />
                            )}
                        </span>
                    </div>
                    <ul
                        className={`art__list ${
                            dragableIndices.includes(index) ? '' : 'open'
                        }`}
                    >
                        {item.items?.map(list => (
                            <li
                                key={list.text}
                                className="art__item"
                                onClick={() => setOpenAside(false)}
                            >
                                <Link to={list.href}>{list.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </article>
    );
};

export default ArticleDragable;
