import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"
export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    img_url: "",
    email: "",
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
    <div className="register-container">
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleRegister(formData);
    }}>
      <h3>Register</h3>
      <label>Name:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
          />
      </label>
      <br />
      <label>User Image:
        <input
          type='text'
          name='img_url'
          value={formData.img_url}
          onChange={handleChange}
          />
      </label>
      <br />
      <label>Email:
        <input
          type='text'
          name='email'
          value={formData.email}
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
      <button className="register-submit">Submit</button>
      <Link to='/Login'>Back to Login</Link>
    </form>
  </div>
  )
}
