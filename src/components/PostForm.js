import React, { useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
const PostForm = () => {
  const url = "http://localhost:8080/rawUrl";
  const [rawUrl, setRawUrl] = useState("");

  const submit = (e) => {
    e.target.reset();
    e.preventDefault();
    axios.post(url, { rawUrl }).then((response) => {
      console.log(response);
    });
  };

  const handle = debounce((e, url) => {
    const userUrl = e.target.value;
    setRawUrl(userUrl);
    console.log(userUrl);
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
