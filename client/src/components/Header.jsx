import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <h1>The Roasted Lizard Inn</h1>
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
          <Link to="/Postings">Back to Postings</Link>
          <Link to='/AccountDetails'>My Account</Link>
        </>
      }
    </div>
  )
}
