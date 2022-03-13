import React, { useEffect, useState } from "react";

const Input = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        setUsers(result);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {users.map((item) => (
            <div className="card mx-2 my-2 col-6" style={{ width: "18rem" }}>
              <img
                src={item.avatar_url}
                className="card-img-top"
                alt="github user"
              />
              <div className="card-body">
                <h5 className="card-title">{item.login}</h5>
                <p className="card-text">Github User {item.login}</p>
                <a href={item.html_url} className="btn btn-primary">
                  Check Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Input;
