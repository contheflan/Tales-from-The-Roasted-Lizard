import React from 'react';
import { Link } from 'react-router-dom';

export default function Postings(props) {
  return (
    <div>
      <h2>Here Thar Be Postings</h2>
      {
        props.postings.map(posting => (
          <div key={posting.id}>
            <Link to={`/postings/${posting.id}`}><p>{posting.title}</p></Link>
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
      <Link to='/postings/new'><button>Create</button></Link>
    </div>
  )
}