import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    img_url: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
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
          value={formData.password}
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
      <Link to='/Login'>Back to Login</Link>
      <button>Submit</button>
    </form>
  )
}
