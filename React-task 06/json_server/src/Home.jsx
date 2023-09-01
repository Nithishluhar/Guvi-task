import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Home() {
    const url = "http://localhost:3000/user";
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(url)
      .then((response) => setPost(response.data))
      .catch((err) => console.log(err));
  }, []);

  //   console.log(post);

  const handleDelete = (id)=>{
    const confirm = window.confirm('Would you like to Delete')
    if (confirm){
      axios.delete('http://localhost:3000/user/' + id)
      .then((res)=>{
             location.reload();
      }).catch(err => console.log(err))
    }
  }
  return (
    <>
      <div className="container mt-5">
        <h2>Curd App with JSON Server</h2>

        <table >
          <thead>
            <tr>
              <th>No</th> <br />
              <th>Name</th> <br />
              <th>Email</th> <br />
              <th>Phone_No</th> <br />
              <th>Action</th> <br />
            </tr>
          </thead>
          <tbody>
            {post &&
              post.map((item, i) => (
                <tr key={i}>
                  <td>{item.id}</td>
                  <br />
                  <td>{item.name}</td>
                  <br />
                  <td>{item.email}</td>
                  <br />
                  <td>{item.phone}</td>
                  <br />

                  <td>
                      <Link to={`/read/${item.id}`} className="btn btn-sm btn-primary me-2">Read</Link>
                      <Link to={`/update/${item.id}`} className="btn btn-sm btn-primary me-2">Update</Link>
                    <button onClick={e => handleDelete(item.id)} className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}


export default Home;
