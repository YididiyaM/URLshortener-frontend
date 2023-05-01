import React, { useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
import validator from "validator";

const PostForm = () => {
  const url = "http://localhost:8080/rawUrl";
  const [rawUrl, setRawUrl] = useState("");

  const submit = (e) => {
    e.target.reset();
    e.preventDefault();
    if (validator.isURL(rawUrl)) {
      axios.post(url, { rawUrl }).then((response) => {
        console.log(response);
      });
    } else {
      alert("Please enter a valid URL!");
    }
  };

  const handle = debounce((e, url) => {
    const userUrl = e.target.value;
    setRawUrl(userUrl);
  }, 500);

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
    </div>
  );
};

export default PostForm;
