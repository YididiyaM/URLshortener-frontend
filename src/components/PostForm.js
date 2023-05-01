import React, { useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
import validator from "validator";
import ReactSwitch from "react-switch";

import ShortenedURL from "./ShortenedURL";
const PostForm = () => {
  const url = "http://localhost:8080/rawUrl";
  const [rawUrl, setRawUrl] = useState("");
  const [toggle, setToggle] = useState(false);
  const [expiration, setExpiration] = useState(0);

  const submit = (e) => {
    e.target.reset();
    e.preventDefault();
    axios.post(url, { rawUrl: rawUrl, expiration }).then((response) => {
      console.log(response);
    });
  };

  const handle = debounce((e) => {
    const userUrl = e.target.value;
    if (validator.isURL(userUrl) && userUrl.length < 1000) {
      setRawUrl(userUrl);
    } else {
      alert("Please enter a valid URL that is less than 1000 characters!");
    }
  }, 800);

  const handleToggle = (val) => {
    setToggle(val);
  };

  const handleExpirationTime = (e) => {
    setExpiration(e);
    console.log(expiration);
  };
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
      </form>
      <ShortenedURL rawUrl={rawUrl} />
      <p> Set a time limit on this link?</p>
      <ReactSwitch checked={toggle} onChange={handleToggle} />
      {toggle && (
        <form>
          <input
            type="number"
            pattern="[0-9]*"
            placeholder="set amount of time here in minutes!"
            onChange={handleExpirationTime}
          />
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default PostForm;
