import React, { useEffect, useState } from "react";
import Main from "./main";
import Login from "./auth/login";

const Home = () => {
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    const sessionToken = localStorage.getItem('loginSession');
    console.log(sessionToken === undefined );
    if (sessionToken === undefined || sessionToken === null) {
      setIsToken(false);
    } else {
      setIsToken(true);
    }
  }, []);

  return isToken ? <Main/> : <Login/>
};

export default Home;