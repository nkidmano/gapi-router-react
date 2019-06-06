import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/login">login</Link>
      </li>
      <li>
        <Link to="/admin">admin</Link>
      </li>
      <li>
        <Link to="/user">user</Link>
      </li>
    </ul>
  );
}

export default NavBar;
