import React from "react";

const BoxRules = ({ title, rules = [] }) => {
  return (
    <>
      <h2>{title}</h2>
      <ol className="content__rule_list">
        {rules.map((rule, index) => (rule ? <li key={`${rule[0]}_${index}`}>{rule}</li> : null))}
      </ol>
    </>
  );
};

export default BoxRules;
