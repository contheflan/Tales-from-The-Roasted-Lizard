import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
import ham from "../../assets/images/ham.gif";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="login-container">
    <img className= "login-ham" src={ham} alt="yum!"></img>
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
      <h2>Sign Into the Registrar or Add Yer Name to the List</h2>
        <div className="login-form">
          <label>Username:
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              />
          </label>
          <br />
          <label>Password:
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              />
          </label>
          <br />
          <Link to='/Register'>Register</Link>
          <button>Submit</button>
        </div>
        <div className="leave">
        <Link to='/'>Leave the Tavern</Link>
        </div>
    </form>
    </div>
  )
}
