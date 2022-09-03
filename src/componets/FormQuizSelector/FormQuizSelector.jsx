/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";

import FormElButtonsSelector from "componets/FormElButtonsSelector";

const FormQuizSelector = ({ formItems = [], onSubmit }) => {
  const [answers, setAnswers] = useState({});

  const validationErrors = useMemo(() => {
    // validation "on fly"
    return formItems.reduce((acc, formItem) => {
      if (answers[formItem.name] && answers[formItem.name] !== formItem.answer) {
        const wrongOptionObj = formItem.options.find((el) => el.value === answers[formItem.name]);
        acc[formItem.name] = `The answer ${
          wrongOptionObj?.label || ""
        } is incorrect. Try another one.`;
      }
      return acc;
    }, {});
  }, [answers, formItems]);

  const handleChange = (name, value) => {
    setAnswers((prevVal) => {
      const updatedVal = { ...prevVal };
      updatedVal[name] = value;
      return updatedVal;
    });
  };

  const handleSubmit = () => {
    if (_.isEmpty(validationErrors)) {
      onSubmit();
    }
  };

  return (
    <>
      {_.map(formItems, (formEl) => (
        <FormElButtonsSelector
          key={formEl.name}
          name={formEl.name}
          label={formEl.question}
          options={formEl.options}
          validationError={validationErrors[formEl.name]}
          onChange={handleChange}
        />
      ))}
      <div className="d-grid gap-4">
        <Button
          disabled={!_.isEmpty(validationErrors)}
          onClick={handleSubmit}
          className="btn__action"
          size="lg"
          variant={"primary"}
        >
          {"Submit"}
        </Button>
      </div>
    </>
  );
};

export default FormQuizSelector;
