import React, { useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
import validator from "validator";

import ShortenedURL from "./ShortenedURL";
const PostForm = () => {
  const url = "http://localhost:8080/rawUrl";
  const [rawUrl, setRawUrl] = useState("");

  const submit = (e) => {
    e.target.reset();
    e.preventDefault();
    if (validator.isURL(rawUrl) && rawUrl.length < 1000) {
      axios.post(url, { rawUrl }).then((response) => {
        console.log(response);
      });
    } else {
      alert("Please enter a valid URL that is less than 1000 characters!");
    }
  };

  const handle = debounce((e, url) => {
    const userUrl = e.target.value;
    setRawUrl(userUrl);
  }, 800);

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="whatever "
          placeholder="insert your url here"
          type="text"
        />
        <button>Submit</button>
        <ShortenedURL rawUrl={rawUrl} />
      </form>
    </div>
  );
};

export default PostForm;
