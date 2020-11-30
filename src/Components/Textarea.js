import React from "react";

const TextArea = ({ state, setState }) => {
    const [value, setValue] = React.useState("");

    const handleChange = (event) => {
        setState((prevState) => ({ ...prevState, text: event.target.value }));
    };

    return <textarea spellCheck={true} className='form-input' placeholder='Enter Message' id='textArea' label='Please provide message' rows={4} cols={10} value={state.text} onChange={handleChange} />;
};

export default TextArea;
