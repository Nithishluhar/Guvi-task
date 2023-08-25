import React from "react";

function Cards(props) {
  const { item } = props;
  return (
    <>
      <div className="col-lg col-md-6">
        <div className="card h-100">
          <a className="nav-link" href={item.blog_link} target="_blank">
            <img src={item.img} class="card-img-top" alt="Link" />
          </a>
          <div className="card-body mt-2">
            <h5 className="card-title">
              <a
                className="nav-link"
                href={item.blog_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                🔎 {item.title}
              </a>
            </h5>
            <p className="card-text text-secondary"> {item.para}</p>
            <a className="nav-link" href={item.blog_link} target="_blank">
              <b>READ MORE ⇛⇛</b>
            </a>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary d-flex w-100 text-align-left">
              {" "}
              "23 August 2023"
              <ul>
                <li>"No Comments"</li>
              </ul>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
