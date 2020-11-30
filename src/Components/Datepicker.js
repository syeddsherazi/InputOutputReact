import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateComponent = ({ state, setState }) => {
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    const formattedDate = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;

    setState((prevState) => ({
      ...prevState,
      date: date,
      displayDate: formattedDate,
    }));
  };

  return (
    <DatePicker
      className="form-input"
      placeholderText="Select date"
      selected={state.date}
      onChange={(date) => {
        setStartDate(date);
        handleDateChange(date);
      }}
    />
  );
};

export default DateComponent;
