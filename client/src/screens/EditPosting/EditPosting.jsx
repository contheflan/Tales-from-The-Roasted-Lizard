import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./EditPosting.css"
import { destroyPosting, getOnePosting, postPosting, putPosting } from "../../services/postings"

function EditPosting(props) {
  const [formData, setFormData] = useState({
    title: "",
    img_url: "",
    content: "",
  })
  const { id } = useParams();

  useEffect(() => {
    const fetchPostingDetail = async () => {
      const formData = await getOnePosting(Number(id));
      setFormData(formData);
    }
    fetchPostingDetail();
  }, [id])

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
        props.handlePostUpdate(formData)
      }}>
        <h3>Update Yer Posting</h3>
        <label htmlFor='title'>Update Yer Title?</label>
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor='img_url'>Change Yer Image?</label>
        <input
          type='text'
          name='img_url'
          value={formData.img_url}
          onChange={handleChange}
        />
        <label htmlFor='content'>Change Yer Content?</label>
        <input
          type='text'
          name='content'
          value={formData.content}
          onChange={handleChange}
        />
        <button>Submit Changes</button>
      </form>
      <Link to={`/Postings`}>
      <button>Cancel Changes</button>
      </Link>
    </div>
  );
}
export default EditPosting;