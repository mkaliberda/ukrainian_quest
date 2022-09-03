/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Button from "react-bootstrap/Button";

import { useNavigate, generatePath } from "react-router-dom";
import { ROUTES } from "routers";

import BoxSymbol from "componets/BoxSymbol";

const SymbolList = ({ collectedSymbols }) => {
  const navigate = useNavigate();

  const handleNavigate = (routeToNavigate) => {
    // use this instead of hfre cause bug in safary
    navigate(routeToNavigate);
  };

  return (
    <div className="layouts__page-container">
      <div className="mt-4 mb-3">
        <h2 className="branded">Your collected symbols</h2>
      </div>
      {collectedSymbols.map((collectedSymbol) => (
        <div className="text-center mb-4">
          <BoxSymbol
            imgSrc={collectedSymbol.img}
            title={collectedSymbol.name}
            subTitle={collectedSymbol.translate}
          />
        </div>
      ))}
      <div className="d-grid gap-4 mb-4">
        <Button
          onFocus={(e) => e.preventDefault}
          onClick={(e) => handleNavigate(generatePath(ROUTES.HOME.path))}
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

export default SymbolList;
