import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

// second argument

const App = () => {
  const [users, setUsers] = useState([]);
  const [list, setList] = useState();

  const handleRemove = (id) => {
    // console.log(id);
    const newList = users.filter((item) => item.id !== id);
    console.log(newList);
    setList(newList);
  };

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>Json users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, userId, title, body } = user;
          return (
            <li key={id}>
              <div>
                <h4>UserId: {userId}</h4>
                <h4>Id: {id}</h4>
                <h4>Title: {title}</h4>
                <p>Body: {body}</p>
                <button onClick={() => handleRemove(user.id)}>Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
