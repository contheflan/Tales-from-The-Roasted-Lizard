import React, { useState } from 'react';
import Layout from '../../layouts/Layout';
import "./CreatePosting.css"
function CreatePosting(props) {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    content: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <>
      <Layout />
    <div className="create-container">
      <form className="create-form" onSubmit={(e) => {
        e.preventDefault()
        props.handlePostCreate(formData)
      }}>
        <h3 className="create-title">Post Yer Posting</h3>
        <label htmlFor='title'>Title Yer Posting</label>
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor='img_url'>Attach Yer Image</label>
        <input
          type='text'
          name='img_url'
          value={formData.image_url}
          onChange={handleChange}
        />
        <label className="create-content" htmlFor='content'>What's Yer Content?</label>
        <input
          type='text'
          name='content'
          value={formData.description}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      </div>
    </>
  );
}
export default CreatePosting;