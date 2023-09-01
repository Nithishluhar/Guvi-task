import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Read() {
  const [data, setData] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get("https://64f17bf40e1e60602d23d638.mockapi.io/users/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <>
      <div className="card text-bg mb-3 ">
        <div className="card-header">
          <h3>Name : {data && data.name}</h3>
        </div>
        <div className="card-body">
          <h6 className="d-flex ">Email: {data && data.email}</h6>
          <p className="card-text">Phone_no: {data && data.phone}</p>
          <h6 className="d-flex ">City: {data && data.city}</h6>

          <Link to={`/update/${id}`} className="btn btn-primary ms-3">
            Edit
          </Link>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </div>
      </div>
    </>
  );
}

export default Read;
