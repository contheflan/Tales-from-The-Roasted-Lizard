import React, { useState } from 'react';
import "./CreateComment.css"
function CreateComment(props) {
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
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleCreate(formData)
      }}>
        <h3>Add Yer Comment</h3>
        <label htmlFor='title'>Name</label>
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor='img_url'>Image URL</label>
        <input
          type='text'
          name='img_url'
          value={formData.image_url}
          onChange={handleChange}
        />
        <label htmlFor='content'>Content</label>
        <input
          type='text'
          name='content'
          value={formData.description}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default CreateComment;