/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";
import Button from "react-bootstrap/Button";

import { useParams, useNavigate, generatePath } from "react-router-dom";
import { ROUTES } from "routers";
import { QUEST_POINT_TYPES } from "const";

import ImgHeader from "componets/ImgHeader";
import BoxRules from "componets/BoxRules";
import FormQuizSelector from "componets/FormQuizSelector";
import FormKeywordInput from "componets/FormKeywordInput";

const Point = ({ selectPoint, setCollectedSymbols }) => {
  const navigate = useNavigate();
  const { lookup } = useParams();

  const selectedPoint = useMemo(() => {
    return selectPoint(lookup);
  }, [lookup]);

  const handleNavigate = (routeToNavigate) => {
    // use this instead of hfre cause bug in safary
    navigate(routeToNavigate);
  };

  const handleSubmit = () => {
    setCollectedSymbols(selectedPoint.symbol);
    navigate(generatePath(ROUTES.SYMBOL.path, { lookup: selectedPoint.symbol }));
  };

  return (
    <div>
      <ImgHeader src={selectedPoint.img} />
      <div className="layouts__page-container">
        <div className="d-grid mb-3">
          <Button
            size="lg"
            variant="outline-primary"
            onFocus={(e) => e.preventDefault}
            onClick={(_e) => handleNavigate(generatePath(ROUTES.HOME.path))}
          >
            Go back to home page
          </Button>
        </div>
        <BoxRules title={"Rules"} rules={selectedPoint.rules} />
        <h2>{selectedPoint.type === QUEST_POINT_TYPES.QUIZ ? "Quiz" : "Check answer"}</h2>
        {selectedPoint.type === QUEST_POINT_TYPES.QUIZ ? (
          <FormQuizSelector formItems={selectedPoint.form} onSubmit={handleSubmit} />
        ) : (
          <FormKeywordInput form={selectedPoint.form} onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default Point;
