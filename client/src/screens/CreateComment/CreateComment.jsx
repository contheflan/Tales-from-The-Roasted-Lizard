import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./CreateComment.css"

function CreateComment(props) {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    content: "",
    img_url: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  console.log(id)
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleCommentCreate(formData, id)
      }}>
        <h3>Add Yer Comment</h3>
        <label htmlFor='content'>Comment</label>
        <input
          type='text'
          name='content'
          value={formData.content}
          onChange={handleChange}
        />
        <label htmlFor='img_url'>Add an Image</label>
        <input
          type='text'
          name='img_url'
          value={formData.img_url}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default CreateComment;