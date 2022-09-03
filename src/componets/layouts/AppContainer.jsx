const AppContainer = ({ children }) => {
  return (
    <div className="layouts__app-container">
      <div className="layouts__app-container-wrapper">{children}</div>
    </div>
  );
};

export default AppContainer;
