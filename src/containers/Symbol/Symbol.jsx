/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";
import Button from "react-bootstrap/Button";

import { useParams, useNavigate, generatePath } from "react-router-dom";
import { ROUTES } from "routers";

import BoxSymbol from "componets/BoxSymbol";

const Symbol = ({ selectSymbol }) => {
  const navigate = useNavigate();
  const { lookup } = useParams();

  const selectedSymbol = useMemo(() => {
    return selectSymbol(lookup);
  }, [lookup]);

  const handleNavigate = (routeToNavigate) => {
    // use this instead of hfre cause bug in safary
    navigate(routeToNavigate);
  };

  return (
    <div className="layouts__page-container">
      <div className="mt-4 mb-3">
        <h2 className="branded">Your symbol</h2>
      </div>
      <div className="text-center mb-3">
        <span className="content__description">
          Don’t forget to save your symbol! Take a screenshot or take a note.
        </span>
      </div>
      <div className="text-center mb-4">
        <BoxSymbol
          imgSrc={selectedSymbol.img}
          title={selectedSymbol.name}
          subTitle={selectedSymbol.translate}
        />
      </div>
      <div className="text-left mb-4">
        <span className="content__description">{selectedSymbol.description}</span>
      </div>
      <div className="d-grid gap-4 mb-4">
        <Button
          onFocus={(e) => e.preventDefault}
          onClick={(_e) => handleNavigate(generatePath(ROUTES.HOME.path))}
          className="btn__action"
          size="lg"
          variant={"primary"}
        >
          {"Go to homepage"}
        </Button>
      </div>
    </div>
  );
};

export default Symbol;
