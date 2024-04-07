import { useEffect, useState } from "react";

import axios from "axios";

export const UserDetails = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/1/users");
      setUsers(response?.data?.data);
    } catch (error) {
      console.log("Error fetching users", error);
    }
  };
  return (
    <div>
      {/*Render the user details*/}
      {users &&
        users.map((user) => (
          <div key={user.id}>
            {user.name}-{user.email}
          </div>
        ))}
    </div>
  );
};
