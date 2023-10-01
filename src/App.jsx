import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="app">
      {users.map((user) => (
        <div key={user.id} className="card">
          <div className="user">
            <h2 className="card-title">{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
