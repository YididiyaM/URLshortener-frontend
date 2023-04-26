import React, { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const url = "http://localhost:8080/shorturl";
  const [data, setData] = useState("data baby");

  const submit = (e) => {
    axios
      .post("http://localhost:8080/data", {})
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handle = (e) => {
    const newData = e.target.value;
    setData(newData);
    console.log(newData);
  };

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input onChange={(e) => handle(e)} id="whatever " value={data} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
