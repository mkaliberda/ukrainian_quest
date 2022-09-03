import React, { useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import "./FormElButtonsSelector.scss";

const FormElButtonsSelector = ({ name, label, options, onChange, validationError }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (val) => {
    setSelectedValue(val);
    onChange(name, val);
  };

  const getVariant = useCallback(
    (value) => {
      let variant = "outline-primary";
      if (selectedValue === value && validationError) {
        variant = "danger";
      } else if (selectedValue === value) {
        variant = "success";
      }
      return variant;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedValue, validationError, options],
  );

  return (
    <div className="form__btn-selector">
      <span className="form__btn-selector-label">{label}</span>
      <span className={`form__btn-selector-error ${validationError ? "active" : ""}`}>
        {validationError || "..."}
      </span>
      <div className="form__btn-selector-wrapper">
        {options.map((el) => (
          <Button
            key={el.value}
            variant={getVariant(el.value)}
            onFocus={(e) => e.preventDefault}
            onClick={() => handleSelect(el.value)}
          >
            {el.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FormElButtonsSelector;
