import React, { useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
const PostForm = () => {
  const url = "http://localhost:8080/shorturl";
  const [data, setData] = useState("data baby");

  const submit = (e) => {
    e.target.reset();
    e.preventDefault();
    axios.get(url).then((response) => {
      console.log(response);
    });
  };

  const handle = debounce((e, url) => {
    const newData = e.target.value;
    setData(newData);
    console.log(newData);
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
