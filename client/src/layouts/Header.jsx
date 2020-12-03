import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

function Header(props) {
  const { handleLogout } = props
  return (
    <header>
      <Link to="/Postings">
        <p>Tales from the Roasted Lizard</p>
      </Link>
      <button onClick={handleLogout} className="logout">Logout</button>
    </header>
  );
}

export default Header;