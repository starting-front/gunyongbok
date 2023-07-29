import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './User/SignIn';
import SignUp from './User/SignUp';
import Home from './Home';

const Router = () => {
    const [isInLogged, setisInLogged] = useState(false);

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
                </Routes>
            )}
        </>
    );
};

export default Router;
