import React from 'react';
import { Link } from 'react-router-dom';
import NewButton from './NewButton'
import UserButton from './UserButton'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock} from '@fortawesome/free-solid-svg-icons'

const Logout = ({logOut, disableLoginWindow, user}) => {
  
  return (    
    <ul className="flex ">         
      <li><NewButton/></li>
      <li className="block relative">
        <div><UserButton user={user} /></div>
        <button className="absolute"
          onClick={() => { logOut(); disableLoginWindow() }}><Link to="/"><FontAwesomeIcon icon={faUserLock} /> Logout</Link>
        </button> 
      </li>
    </ul>
  )
} 

export default Logout
