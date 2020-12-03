import { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import "./App.css";
import Layout from './layouts/Layout';
import Intro from "./screens/Intro/Intro";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import Postings from "./screens/Postings/Postings";
import CreatePosting from "./screens/CreatePosting/CreatePosting";
import PostingDetails from "./screens/PostingDetails/PostingDetails";
import EditPostings from "./screens/EditPosting/EditPosting";
import CreateComment from "./screens/CreateComment/CreateComment";

// import { getAllComments } from '../services/comments'
import { destroyPosting, getAllPostings, postPosting, putPosting } from "../src/services/postings"
import { destroyComment, getAllComments, postComment, putComment } from "../src/services/comments"
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [postings, setPostings] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if (!userData) {
        history.push('/')
      }
    }
    handleVerify();

    const fetchPostings = async () => {
      const postingData = await getAllPostings();
      setPostings(postingData);
    }
    fetchPostings();

  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/Postings');
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/Login');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  }

  const handlePostCreate = async (postingData) => {
    const newPosting = await postPosting(postingData);
    setPostings(prevState => [...prevState, newPosting]);
    history.push('/Postings');
  }

  const handleCommentCreate = async (commentData) => {
    const newComment = await postComment(commentData);
    setComments(prevState => [...prevState, newComment]);
    history.push(`/Postings/${postings.id}`);
    // is this line above right? ask shay
  }

  const handlePostDelete = async (id) => {
    await destroyPosting(id);
    setPostings(prevState => prevState.filter(posting => posting.id !== id))
  }

  return (
    <div className="App">
      <div>
      <Route exact path="/">
        <Intro />
      </Route>
      <Route exact path="/Login">
        <Login handleLogin={handleLogin}/>
      </Route>
      <Route exact path="/Register">
        <Register handleRegister={handleRegister}/>
      </Route>
        <Layout handleLogout={handleLogout}>
      <Route exact path="/AccountDetails">
        <Register />
      </Route>
      <Route exact path="/Postings">
        <Postings postings={postings} handlePostDelete={handlePostDelete}/>
      </Route>
      <Route exact path="/Postings/:id">
        <PostingDetails postings={postings} handlePostDelete={handlePostDelete}/>
      </Route>
      <Route exact path="/CreatePosting">
        <CreatePosting handlePostCreate={handlePostCreate}/>
      </Route>
      <Route exact path="/EditPostings">
        <EditPostings handlePostDelete={handlePostDelete} />
      </Route>
      <Route exact path="/CreateComment">
        <CreateComment handleCommentCreate={handleCommentCreate} />
      </Route>
      <Route exact path="/EditComment">
      </Route>
        </Layout>
    </div>
      </div>
  );
}

export default App;
