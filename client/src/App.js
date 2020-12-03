import { useState, useEffect } from 'react';
import { Route, useHistory, Redirect } from 'react-router-dom';
import "./App.css";
import Intro from "./screens/Intro/Intro";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import AccountDetails from "./screens/AccountDetails/AccountDetails";
import Postings from "./screens/Postings/Postings";
import CreatePosting from "./screens/CreatePosting/CreatePosting";
import PostingDetails from "./screens/PostingDetails/PostingDetails";
import EditPosting from "./screens/EditPosting/EditPosting";
import CreateComment from "./screens/CreateComment/CreateComment";

// import { getAllComments } from '../services/comments'
import { destroyPosting, getAllPostings, postPosting, putPosting } from "../src/services/postings"
import { destroyComment, getAllComments, postComment, putComment } from "../src/services/comments"
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [toggle, setToggle] = useState(true)
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

  }, [toggle])

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

  const handlePostDelete = async (id) => {
    await destroyPosting(id);
    setPostings(prevState => prevState.filter(posting => posting.id !== id));
    setToggle(prevState => !prevState)
    history.push('/Postings');
  }

  const handlePostUpdate = async (postingData) => {
    const newPosting = await postPosting(postingData);
    setPostings(prevState => [...prevState, newPosting]);
    history.push(`/Postings/${newPosting.id}`);
  }

  const handleCommentCreate = async (commentData) => {
    const newComment = await postComment(commentData);
    setComments(prevState => [...prevState, newComment]);
    setToggle(prevState => !prevState)
    history.push(`/Postings/${newComment.id}`);
    // is this line above right? ask shay
  }

  return (
    <div className="App">
      <div>
      <Route exact path="/">
        <Intro />
      </Route>
        
      <Route exact path="/Login">
        <Login 
          handleLogin={handleLogin} />
      </Route>
        
      <Route exact path="/Register">
        <Register 
          handleRegister={handleRegister} />
      </Route>
        
      <Route exact path="/AccountDetails">
        <AccountDetails 
          handleLogout={handleLogout} />
      </Route>
        
      <Route exact path="/Postings">
        <Postings
          postings={postings}
          handleLogout={handleLogout}
          handlePostDelete={handlePostDelete} />
      </Route>
        
      <Route exact path="/Postings/:id">
        <PostingDetails
          postings={postings}
          handleLogout={handleLogout}
          handlePostDelete={handlePostDelete} />
      </Route>
        
      <Route exact path="/CreatePosting">
          <CreatePosting
          postings={postings}
          handleLogout={handleLogout}
          handlePostCreate={handlePostCreate} />
      </Route>
        
      <Route exact path="/Postings/:id/Edit">
        <EditPosting
          postings={postings}
          handlePostUpdate={handlePostUpdate}
          handlePostDelete={handlePostDelete} />
      </Route>

      <Route exact path="/CreateComment">
        <CreateComment
          handleCommentCreate={handleCommentCreate} />
      </Route>
      
      <Route exact path="/EditComment">
        
      </Route>
      </div>
    </div>
  );
}

export default App;
