import React, { useState, useContext } from "react";
import get from "lodash/get";
// THEMES ARE DYNAMIC, FOR NOW JUST AS A POC I'VE TAKEN CLASS NAMES, AND LABEL TITLES
// BUT FOR EXPANDING WE CAN TAKE ANY KEYS IN JSON/FROM API AND ADJUST OUR
import ThemesData from "../config.json";
import { useHistory } from "react-router-dom";
import { AppContext } from "../Components/Context/index";
import DateComponent from "../Components/Datepicker";
import Textarea from "../Components/Textarea";
import RadioButtons from "../Components/Radiobuttons";
import DialogBox from "../Components/Dialog";

const InputPage = ({}) => {
    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [themeSettings, setThemeSettings] = useState();
    const history = useHistory();
    const appContext = useContext(AppContext);
    // MAINTAIN USER'S SELECTION IN APP CONTEXT
    const { contextState, setContextState } = appContext;

    // HANDLE FORM SUBMIT
    const handleSubmit = (e) => {
        setSubmitted(true);
        e.preventDefault();
        if (!contextState.date || !contextState.text || !contextState.theme) {
            return;
        }
        history.push({
            pathname: "/output",
            state: { contextState },
        });
    };

    return (
        <div>
            <div className='inputpage-container'>
                <h1 className='inputpage-title'>Input Page</h1>
                <div className='form-container datepicker'>
                    <label htmlFor='datepicker'>Please provide date</label>
                    <DateComponent className='input-margin' state={contextState} setState={setContextState} />
                    {submitted && !get(contextState, "displayDate") && (
                        <span className='help-block'>* Date can't be empty</span>
                    )}
                </div>
                <div className='form-container'>
                    <label htmlFor='textArea'>Please provide message</label>
                    <Textarea className='input-margin' state={contextState} setState={setContextState} />
                    {submitted && !contextState.text && <span className='help-block'>* Message can't be empty</span>}
                </div>
                <div className='form-container'>
                    <label>Choose Theme</label>
                    <RadioButtons
                        className='input-margin'
                        state={contextState}
                        setState={setContextState}
                        ThemesData={ThemesData}
                        setThemeSettings={setThemeSettings}
                        setOpen={setOpen}
                    />
                    {submitted && !contextState.theme && <span className='help-block'>* Please select a theme</span>}
                </div>
                <button className='output-btn desk-only' onClick={handleSubmit}>
                    Output
                </button>
                <DialogBox themeSettings={themeSettings} open={open} setOpen={setOpen} />
            </div>
            <div className='mobile-only sticky-bottom'>
                <button className='output-btn' onClick={handleSubmit}>
                    Output
                </button>
            </div>
        </div>
    );
};

export default InputPage;
