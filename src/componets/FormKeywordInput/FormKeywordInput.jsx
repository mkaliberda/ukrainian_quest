/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import _ from "lodash";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormKeywordInput = ({ form = {}, onSubmit }) => {
  const [answer, setAnswer] = useState("");
  const [validationErorr, setValidationErorr] = useState("");

  const handleChange = (evt) => {
    setValidationErorr("");
    setAnswer(evt.target.value);
  };

  const validateKeyword = () => {
    if (!answer) {
      setValidationErorr("Keyword is empty");
      return false;
    }
    const clearAnswer = _.toLower(_.trim(answer));
    const isValid = clearAnswer === form.answer;
    if (!isValid) {
      setValidationErorr("The keyword is not correct.");
    }
    return isValid;
  };

  const handleSubmit = () => {
    if (validateKeyword()) {
      onSubmit();
    }
  };

  return (
    <>
      <div className="mb-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="forms__label">{form.question}</Form.Label>
            <Form.Control
              onChange={handleChange}
              isInvalid={Boolean(validationErorr)}
              size="lg"
              type="email"
              placeholder="Enter keyword"
            />
            <Form.Text className="text-muted text-danger">{validationErorr}</Form.Text>
          </Form.Group>
        </Form>
      </div>
      <div className="d-grid gap-4">
        <Button
          disabled={!answer}
          onFocus={(e) => e.preventDefault}
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

export default FormKeywordInput;
