import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";
import Home from "./Home";
import UserTypeSelect from "./UserType/UserTypeSelect";
import Portfolio from "./Portfolio/Portfolio";
import ProfileEdit from "./Profile/ProfileEdit";
import PortfolioUpload from "./Profile/PortfolioUpload";

const Router = () => {
  const [isInLogged] = useState(false);

  return (
    <>
      {isInLogged ? (
        <Routes>
          <Route path="/" />
          <Route path="/*" />
        </Routes>
      ) : (
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/usertype" element={<UserTypeSelect />} />
          <Route path="/myportfolio" element={<Portfolio />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/profile/upload" element={<PortfolioUpload />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
