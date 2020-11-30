import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../Components/Tooltip";
import get from "lodash/get";

const RadioButtons = ({
  state,
  setState,
  ThemesData,
  setOpen,
  setThemeSettings,
}) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    const settings = ThemesData.filter((item) => item.id == event.target.value);
    setThemeSettings(settings[0]);
    setState((prevState) => ({ ...prevState, theme: settings[0] }));
  };

  const handlePreview = (theme) => {
    setOpen(true);
    const settings = ThemesData.filter((item) => item.title == theme);
    setThemeSettings(settings[0]);
  };

  return (
    <div>
      {ThemesData.map((item, index) => {
        return (
          <div className="radiobtn-wrapper" key={index}>
            <label className="radiobtn-container">
              {item.title}
              <input
                onChange={handleChange}
                type="radio"
                name="theme"
                value={item.id}
                checked={get(state, "theme.id") === item.id}
              />
              <span className="checkmark"></span>
            </label>
            <Tooltip text="Preview Theme">
              <FontAwesomeIcon
                onClick={() => handlePreview(item.title)}
                icon={faEye}
                color="black"
                size="sm"
              />
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButtons;
