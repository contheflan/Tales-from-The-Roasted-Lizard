import React from 'react';
import "./Postings.css";
import { Link } from 'react-router-dom';

export default function Postings(props) {
  return (
    <div className="postings-container" >
      <h2>Here There Be Postings</h2>
      {
        props.postings.map(posting => (
          <div className="posting" key={posting.id}>
            <Link to={`/Postings/${posting.id}`}><p className="posting-title">{posting.title}</p><img className="posting-img" src={posting.img_url}/></Link>
            {/* {
              posting.user_id === props.currentUser?.id &&
              <>
                <Link to={`/postings/${posting.id}/edit`}><button>Delete</button></Link>
                <button onClick={() => props.handleDelete(posting.id)}>Delete</button>
              </>
            } */}
          </div>
        ))
      }
      <br />
      {/* <Link to='/postings/new'><button>Create</button></Link> */}
    </div>
  )
}