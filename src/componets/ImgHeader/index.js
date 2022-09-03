import "./ImgHeader.scss";

const ImgHeader = ({ src }) => {
  return <div className="image-header__box" style={{ backgroundImage: `url(${src})` }} />;
};

export default ImgHeader;
