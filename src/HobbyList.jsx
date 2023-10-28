import './styles/HobbyList.css';
import Hobby from "./Hobby";

const HobbyList = ({ hobbyList }) => {
    return (
        <>
            <div className="head">Hobby List</div>
            <br/>
            <div className="hobby-list">
                {hobbyList.map(item =>
                    <Hobby hobby={item} />
                )}
            </div>
        </>
    );
}

export default HobbyList;