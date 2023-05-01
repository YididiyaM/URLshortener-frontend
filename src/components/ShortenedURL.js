import React, { useState, useEffect } from "react";
import axios from "axios";

import Redirect from "./Redirect";
const ShortenedURL = ({ rawUrl }) => {
  const [shortURL, setShortURL] = useState("");
  const url = "http://localhost:8080/shortUrl";
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      console.log(rawUrl, "rawurl");
      setShortURL(response.data);
    });
  }, [rawUrl]);
  return (
    <div>
      Your shortened URL will appear here:
      {rawUrl && <Redirect shortURL={shortURL} />}
    </div>
  );
};
export default ShortenedURL;
