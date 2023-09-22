// React
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Components
import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";
import Home from "./Home";
import UserTypeSelect from "./UserType/UserTypeSelect";
import Portfolio from "./Portfolio/Portfolio";
import ProfileEdit from "./Profile/ProfileEdit";
import PortfolioUpload from "./Profile/PortfolioUpload";
import Overview from "./Profile/OverView";
import Improvements from "./Profile/Improvement";

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
          <Route path="/profile/overview" element={<Overview />} />
          <Route path="/profile/improvements" element={<Improvements />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
