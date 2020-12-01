import React from 'react';
import { Link } from 'react-router-dom';

export default function Postings(props) {
  return (
    <div>
      <h3>Postings!</h3>
      {
        props.postings.map(posting => (
          <React.Fragment key={posting.id}>
            <Link to={`/postings/${posting.id}`}><p>{posting.name}</p></Link>
            {
              posting.user_id === props.currentUser?.id &&
              <>
                <Link to={`/postings/${posting.id}/edit`}><button>Edit</button></Link>
                <button onClick={() => props.handleDelete(posting.id)}>Delete</button>
              </>
            }
          </React.Fragment>
        ))
      }
      <br />
      <Link to='/postings/new'><button>Create</button></Link>
    </div>
  )
}