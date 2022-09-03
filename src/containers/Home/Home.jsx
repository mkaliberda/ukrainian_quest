import Button from "react-bootstrap/Button";
import _ from "lodash";

import ImgHeader from "componets/ImgHeader";
import BoxRules from "componets/BoxRules";
import headerImgSrc from "assets/img-header-welcome.png";

import { useNavigate, generatePath } from "react-router-dom";
import { ROUTES } from "routers";

const Home = ({ pointListWithRoutes, collectedSymbols = [], rules = [] }) => {
  const navigate = useNavigate();

  const handleNavigate = (routeToNavigate) => {
    // use this instead of hfre cause bug in safary
    return navigate(routeToNavigate);
  };

  return (
    <div>
      <ImgHeader src={headerImgSrc} />
      <div className="layouts__page-container">
        {!_.isEmpty(collectedSymbols) ? (
          <div className="d-grid mt-3 mb-3">
            <Button
              onFocus={(e) => e.preventDefault}
              size="lg"
              variant="outline-primary"
              onClick={(_e) => handleNavigate(generatePath(ROUTES.COLLECTED_SYMBOLS.path))}
            >
              Open my symbols
            </Button>
          </div>
        ) : null}
        <BoxRules title={"Rules"} rules={rules} />
        <h3>Let’s start the fun!</h3>
        <div className="d-grid gap-4">
          {pointListWithRoutes.map((pointEl, index) => (
            <Button
              className="btn__action"
              size="lg"
              key={pointEl.lookup}
              variant={index % 2 ? "primary" : "warning"}
              href={pointEl.routePath}
              onFocus={(e) => e.preventDefault}
              onClick={(_e) => handleNavigate(pointEl.routePath)}
            >
              {pointEl.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
