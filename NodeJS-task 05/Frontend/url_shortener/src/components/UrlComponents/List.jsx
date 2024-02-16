import axios from "axios";
import React, { useEffect, useState } from "react";
import Backround from "../Backround";

function List() {
  const [urlData, setUrlData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://url-shortener-two-smoky.vercel.app/url/data");
      setUrlData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const res = urlData.map((item, i) => {
    return { ...item, Length: i, clicks: item.visitHistory.length };
  });
  return (
    <div className="dataTable">
      <div>
        <table>
          <thead>
            <tr>
              <th>RedirectURL:</th>
              <th>ShortId:</th>
              <th>visitHistory:</th>
            </tr>
          </thead>
          <tbody>
            {res &&
              res.map((item, i) => (
                <tr key={i}>
                  <td>{item.redirectURL}</td>
                  <td>
                  https://url-shortener-two-smoky.vercel.app/url/{item.shortId}
                  </td>
                  <td> {item.clicks}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Backround />
    </div>
  );
}

export default List;
