/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

const SearchComponent = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // funcion para traer los datos de la API
  const URL = "https://jsonplaceholder.typicode.com/users";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };

  // Metodo de filtrado
  const results = !search
    ? users
    : users.filter((element) =>
        element.name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  // Funcion de busqueda
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    showData();
  }, []);

  return (
    <div>
      <input
        value={search}
        onChange={handleChange}
        type="text"
        className="form-control mt-3"
        placeholder="Search..."
      />

      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-curso ">
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {results.map((user) => (
            <tr key={user.id}>
              <td> {user.name} </td>
              <td> {user.username} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchComponent;
