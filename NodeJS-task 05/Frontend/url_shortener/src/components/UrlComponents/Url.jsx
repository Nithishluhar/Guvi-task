import React, { useState } from "react";
import Input from "./Input";
import Backround from "../Backround";
import LinkResult from "./LinkResult";

function Url() {
  const [url, setUrl] = useState("");
  console.log(url);
  return (
    <div>
      <div className="container">
        <Input setUrl={setUrl} />
        <LinkResult url={url} />
        <Backround />
      </div>
    </div>
  );
}

export default Url;
