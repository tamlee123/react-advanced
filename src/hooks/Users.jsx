import React, { useEffect, useState } from "react";
import axios from "axios";

function Users(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //react doesn't allows async, so we have to wrap these 2 lines in another function
    //call it getUsers()
    async function getUsers() {
      const result = await axios("http://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
    }
    //not get called automatically, so we have to call it
    getUsers();
  });
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
