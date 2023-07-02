import { useState } from 'react';
import info from './itemsArticle.json';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

const ArticleDragable = () => {
    const [dragable, setDragable] = useState(true);

    const handleDragable = () => {
        setDragable(!dragable);
    };

    return (
        <article className="aside__art">
            {info?.map(item => (
                <div
                    key={item.id}
                    className={`art__content ${dragable ? 'open' : ''}`}
                >
                    <div className="content__dragable" onClick={handleDragable}>
                        <h4 className="art__title"> {item.title} </h4>
                        <span className="icon">
                            {dragable ? (
                                <AiOutlineMinusSquare />
                            ) : (
                                <AiOutlinePlusSquare />
                            )}
                        </span>
                    </div>
                    <ul className={`art__list ${dragable ? 'open' : ''}`}>
                        {item.items?.map(list => (
                            <li key={list.text} className="art__item">
                                <a href={list.href}>{list.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </article>
    );
};

export default ArticleDragable;
