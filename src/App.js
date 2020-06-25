import React, { useState, useEffect } from 'react';
import './styles/main.css'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from "firebase";
import './firebaseConfig'

import Navigation from './components/Navigation'
import Home from './components/Home'
import BlogpostDetail from './components/BlogpostDetail'
import Contact from './components/Contact'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost'
import UserProfile from './components/UserProfile'
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './components/Unauthorized';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(userAuth => {
      setUser(userAuth)
    })
  }, [])

  const [blogpost, setBlogpost] = useState([])
  const [db, setDB] = useState(null)

  const sortPlacesByDate = array => {
    array.sort((a, b) => {
      return b.visitingDate.localeCompare(a.visitingDate)
    })   
  }
  useEffect(() => {
    const firestoreDB = firebase.firestore()
    setDB(firestoreDB)
    const ref = firestoreDB.collection('projectfinal')

    ref.onSnapshot(querySnapshot => {
      const blogs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      sortPlacesByDate(blogs)
      setBlogpost(blogs)
    })
  }, [db])

  return (
    <Router>
    <div className="max-w-screen-none">
      <Navigation user={user}/>
      <Route path="/" exact ><div>{blogpost.length > 0 && <Home blogpost={blogpost}/>}</div></Route> 
      <Route path="/contact"> <Contact /></Route>
      <ProtectedRoute exact path="/new" user={user} db={db} blogpost={blogpost} component={NewPost} />
      <Route exact path="/post/:id"> 
        <div>{blogpost.length > 0 && <BlogpostDetail blogpost={blogpost} user={user} />}</div>
      </Route>
      <ProtectedRoute exact path="/post/:id/edit" user={user} db={db} blogpost={blogpost} component={EditPost} />
      <Route exact path='/user'> <UserProfile user={user}/></Route>
      <Route exact path='/unauthorized'> <Unauthorized /></Route>
    </div> 
    </Router>
  );
}

export default App;