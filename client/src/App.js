import { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import "./App.css";
import Layout from './layouts/Layout';
import Intro from "./screens/Intro/Intro";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import Postings from "./screens/Postings/Postings";
import PostingDetails from "./screens/PostingDetails/PostingDetails";

// import { getAllComments } from '../services/comments'
import { destroyPosting, getAllPostings, postPosting, putPosting } from "../src/services/postings"
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [postings, setPostings] = useState([]);
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

  return (
    <div className="App">
      <Layout
      currentUser={currentUser}
      handleLogout={handleLogout}
    ></Layout>
      <Route exact path="/">
        <Intro />
      </Route>
      <Route exact path="/Login">
        <Login handleLogin={handleLogin}/>
      </Route>
      <Route exact path="/Register">
        <Register handleRegister={handleRegister}/>
      </Route>
      <Route exact path="/AccountDetails">
        <Register />
      </Route>
      <Route exact path="/Postings">
        <Postings postings={postings}/>
      </Route>
      <Route exact path="/Postings/:id">
        <PostingDetails postings={postings}/>
      </Route>
      <Route exact path="/EditPostings">
      </Route>
      <Route exact path="/CreateComment">
      </Route>
      <Route exact path="/EditComment">
      </Route>
    </div>
  );
}

export default App;
