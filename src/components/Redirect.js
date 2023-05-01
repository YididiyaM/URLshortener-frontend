import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";

const Redirect = ({ shortURL }) => {
  const redirectedURL = `http://localhost:8080/${shortURL.shortURL}`;
  useEffect(() => {
    axios.get(redirectedURL).then((response) => {
      console.log(response.data);
    });
  }, [redirectedURL]);
  return (
    <NavLink to={redirectedURL} target="_blank">
      {redirectedURL}
    </NavLink>
  );
};

export default Redirect;
