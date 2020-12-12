import React from 'react';
import "./Postings.css";
import { Link } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import Christmas from '../../assets/images/christmastavern.gif'
export default function Postings(props) {
  return (
    <div>
      <Layout />
      <h2>Here There Be Postings</h2>
      <img className="christmas" src={Christmas}></img>
    <Link to="/CreatePosting">
    <button className="posting-button">Add Posting</button>
    </Link>
    <div className="postings-container" >
    {
      props.postings.map(posting => (
        <div className="postings" key={posting.id}>
          <Link to={`/Postings/${posting.id}`}>
            <p className="posting-title">{posting.title}</p>
            <img className="posting-img" src={posting.img_url} />
          </Link>
        </div>
        ))
      }
      <br />
      </div>
      </div>
  )
}