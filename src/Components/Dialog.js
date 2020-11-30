import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import Preview from "../Components/Preview";
import Tooltip from "../Components/Tooltip";

const DialogBox = ({ open, setOpen, themeSettings }) => {
    const [preview, setPreview] = useState("desktop");

    return (
        <Dialog onClose={() => setOpen(false)} aria-labelledby='simple-dialog-title' open={open}>
            <div className='Dialog'>
                <div className='close-icon'>
                    <FontAwesomeIcon onClick={() => setOpen(false)} icon={faTimes} color='black' size='1x' />
                </div>

                <Tooltip text='Desktop View'>
                    <FontAwesomeIcon className='device-icon' onClick={() => setPreview("desktop")} icon={faDesktop} color={preview === "desktop" ? "#47bfc0" : "black"} size='1x' />
                </Tooltip>

                <Tooltip text='Mobile View'>
                    <FontAwesomeIcon className='device-icon' onClick={() => setPreview("mobile")} icon={faMobileAlt} color={preview === "mobile" ? "#47bfc0" : "black"} size='1x' />
                </Tooltip>
            </div>
            <Preview themeSettings={themeSettings} preview={preview} />
        </Dialog>
    );
};

export default DialogBox;
