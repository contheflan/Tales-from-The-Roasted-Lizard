import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <Link to="/Postings">
        <h1>
          The Roasted Lizard Inn
        </h1>
      </Link>
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <Link to='/Login'>Get Outta Here!</Link>
      }
      <hr />
      {
        currentUser &&
        <>
          <Link className="back" to="/Postings">Back to Postings</Link>
          <Link to='/AccountDetails'>My Account</Link>
        </>
      }
    </header>
  )
}
