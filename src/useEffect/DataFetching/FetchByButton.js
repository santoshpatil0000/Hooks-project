import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchByButton() {
  const [post, setPost] = useState({});

  const [id, setId] = useState(1);

  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  return (
    <div>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch data
      </button>
      <div>{post.title}</div>
    </div>
  );
}

export default FetchByButton;
