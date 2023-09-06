import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";
import Home from "./Home";
import UserTypeSelect from "./UserType/UserTypeSelect";
import Portfolio from "./Portfolio/Portfolio";
import ProfileEdit from "./Profile/ProfileEdit";
import Test from "./Test";

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
          <Route path="/test" element={<Test />} />
          <Route path="/profile/upload" />
        </Routes>
      )}
    </>
  );
};

export default Router;
