import { useState } from 'react';
import './styles/Hobby.css';

const Hobby = ({ hobby }) => {
    const [showDescription, setShowDescription] = useState(false);

    const handleMouseEnter = () => {
        setShowDescription(true);
    }

    const handleMouseLeave = () => {
        setShowDescription(false);
    }

    return (
        <div className="hobby-item">
            <div className="hobby-title" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {hobby.title}
                {showDescription ? <div className='hobby-description'>{hobby.description}</div> : null}
            </div>
        </div>
    );
}

export default Hobby;