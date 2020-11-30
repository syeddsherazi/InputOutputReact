import React from "react";

const Tooltip = ({ children, text }) => (
    <div className='tooltip'>
        {children}
        <span className='text'>{text}</span>
    </div>
);

export default Tooltip;
