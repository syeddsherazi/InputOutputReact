import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "../Components/Tooltip";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../Components/Context/index";

const OutputPage = (props) => {
    const appContext = useContext(AppContext);
    const { contextState, setContextState } = appContext;
    const history = useHistory();

    if (!contextState.theme) {
        history.push({
            pathname: "/",
        });
        return null;
    }

    return (
        <div className={`outputpage-wrapper ${contextState.theme.id}`}>
            <div className='back-btn'>
                <Tooltip text='Back to Input Page'>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faLongArrowAltLeft} color='black' size='2x' />
                    </Link>
                </Tooltip>
            </div>

            <h1 className='outputpage-header'>{contextState.theme.title} Theme</h1>
            <div className='outputpage-container'>
                <div className='item'>
                    <h3 className='item-header'>{contextState.theme.datePickerTitle}</h3>
                    <p className='item-text'>{contextState.displayDate}</p>
                </div>
                <div className='item'>
                    <h3 className='item-header'>{contextState.theme.messageTitle}</h3>
                    <p className='item-text'>{contextState.text}</p>
                </div>
                <a href='https://github.com/syeddsherazi/InputOutputReact' className='github-link'>
                    <button>
                        <span>Check Github</span>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default OutputPage;
