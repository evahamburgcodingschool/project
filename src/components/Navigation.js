import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout'
import LoginForm from './LoginForm'
import firebase from "firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking} from '@fortawesome/free-solid-svg-icons'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({ user }) => {  
  const [error, setError] = useState(null);
  const [showLogin, setShowLogin] = useState(false)

  const handleLogIn = async ({ username, password}) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(username, password);
    } catch(e) {
      setError(e.message)
    }
  }
  const handleLogOut = async ()=> {
    try {
			await firebase.auth().signOut();
		} catch (e) {
			setError(e.message);
		}
  };
  
  const toggleLoginForm = () => {
		setShowLogin(!showLogin);
	};

  return (
    <header className="p-2">
      <nav className="flex items-center justify-between flex-wrap bg-pink-600 p-6">
        <div className="mr-12 text-2xl flex">
          <Link to="/">
          <FontAwesomeIcon icon={faHiking} size="lg" pull="left"/>
            Eva's Travel Blog
          </Link>
        </div>
        <ul className="flex ">
          <li className="mr-12 inline-block"><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
          <li className="mr-12 inline-block"><Link to="/contact"><FontAwesomeIcon icon={faAddressBook} /> Contact</Link></li> 
          <li className="inline-block">
            {!user && (
              <div onClick={toggleLoginForm}><FontAwesomeIcon icon={faUserLock} /> Login</div>
            )}
            {user && (
              <Logout user={user} logOut={handleLogOut} disableLoginWindow={toggleLoginForm}/>
            )}
            {!user && showLogin && (
              <LoginForm logIn={handleLogIn} errorMessage={error} />
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Navigation