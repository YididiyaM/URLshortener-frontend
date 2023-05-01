import React, { useState, useEffect } from "react";
import axios from "axios";

import Redirect from "./Redirect";
const ShortenedURL = () => {
  const [shortURL, setShortURL] = useState("");
  const url = "http://localhost:8080/shortUrl";
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setShortURL(response.data);
    });
  }, []);
  return (
    <div>
      This is your shortURL
      <Redirect shortURL={shortURL} />
    </div>
  );
};
export default ShortenedURL;
