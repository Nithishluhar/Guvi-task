import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
  });

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/user/" + id)
      .then((response) => setInputs(response.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(inputs);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:3000/user/" +id, inputs)
      // .then(res => console.log("Success", res))
      .then((res) => { 
        console.log("Success", res);

        navigate("/");
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label htmlFor="name" class="label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Name"
            value={inputs && inputs.name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="email" class="label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
            value={inputs && inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
        </div>
        <br />
        <div class="mb-3">
          <label htmlFor="email" class="label">
            Phone_no:
          </label>
          <input
            type="digits"
            class="form-control"
            id="phone"
            placeholder="number"
            value={inputs && inputs.phone}
            onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
          />
        </div>
        <br />
        <button className="btn btn-primary">Update</button>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </form>
    </>
  );
}

export default Update;
