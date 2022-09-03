import React from "react";
import "./BoxSymbol.scss";

const BoxSymbol = ({ imgSrc, title, subTitle }) => {
  return (
    <div className="box-symbol__wrapper">
      <div className="box-symbol__img-box" style={{ backgroundImage: `url(${imgSrc})` }} />
      <h2 className="branded">{title ? title : null}</h2>
      <h3 className="sticky-subtitle">{subTitle ? `(${subTitle})` : null}</h3>
    </div>
  );
};

export default BoxSymbol;
