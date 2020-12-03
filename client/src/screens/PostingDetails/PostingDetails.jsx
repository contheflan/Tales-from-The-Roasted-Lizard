import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import { getOnePosting } from '../../services/postings'
// import { addFlavor } from '../services/flavors';
export default function PostingDetails(props) {
  const [currentPost, setCurrentPost] = useState({})
  // const [comment, setComment] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchPostingDetail = async () => {
      const post = await getOnePosting(Number(id));
      setCurrentPost(post);
    }
    fetchPostingDetail();

    // const fetchComment = async () => {
    //   const comment = await getOnePosting(id);
    //   setComment(postingDetail.comment);
    // }
    // fetchComment();
  }, [id])

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const PostingDetail = await addFlavor(flavorId, id);
  //   // I changed our response on the backend for this route.
  //   // instead of getting a list of just the flavors,
  //   // I grab the whole Posting object with it's flavors
  //   // This makes it easy to replace our state with the updated Detail.
  //   setPostingDetail(PostingDetail);
  // }

  // this is the handleChange for the select drop down
  // since this form only has one value, we do not need a variable name for the key
  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setFlavorId(value);
  // }

  return (
    <>
      <Layout/>
    <div>
      <h3>{currentPost?.title}</h3>
      <p>{currentPost?.content}</p>
    <div className="comments-container">
      {
        currentPost.comments?.map(comment => (
          <div key={comment.id}>
            <p>{comment.user.username}#{comment.user_id} said</p>
            <p>{comment.content}</p>
          </div>
        ))
      }
        <Link to="/CreateComment">
        <button>Comment</button>
        </Link>
    </div>
    </div>
  </>
  )
}
