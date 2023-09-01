import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone:""
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
   await axios.post("https://64f17bf40e1e60602d23d638.mockapi.io/users", inputs)
      // .then(res => console.log("Success", res))
      .then((res) => {setInputs(res)
        console.log("Success", res);

        // alert("data added");
        navigate("/");
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlFor="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Name"
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
        </div>
        <br />
        <div class="mb-3">
          <label htmlFor="email" class="form-label">
            Phone_no:
          </label>
          <input
            type="digits"
            class="form-control"
            id="phone"
            placeholder="number"
            onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
          />
        </div>
        <br />
        <div class="mb-3">
          <label htmlFor="email" class="label">
            City:
          </label>
          <input
            type="text"
            class="form-control"
            id="city"
            placeholder="city"
            value={inputs && inputs.city}
            onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
          />
        </div>
        <br />
        <button className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </form>
    </>
  );
}

export default Create;
