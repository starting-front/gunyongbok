import { Routes, Route } from "react-router-dom";
import { useState } from "react";

const Router = () => {
  const [isInLogged, setisInLogged] = useState(true);

  return (
    <>
      {isInLogged ? (
        <Routes>
          <Route path="/" />
          <Route path="/*" />
        </Routes>
      ) : (
        <Routes>
          <Route />
        </Routes>
      )}
    </>
  );
};

export default Router;
