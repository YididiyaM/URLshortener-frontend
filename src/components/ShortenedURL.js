import React, { useState, useEffect } from "react";
import axios from "axios";

import Redirect from "./Redirect";
const ShortenedURL = ({ rawUrl }) => {
  const [shortURL, setShortURL] = useState("");
  const url = "http://localhost:8080/shortUrl";
  useEffect(() => {
    axios.get(url).then((response) => {
      setShortURL(response.data);
    });
  }, []);
  return (
    <div>
      Your shortened URL will appear here:
      {rawUrl && <Redirect shortURL={shortURL} />}
    </div>
  );
};
export default ShortenedURL;
