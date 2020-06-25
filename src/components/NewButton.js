import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'

const NewButton = () => {
  return (              
    <button className="mr-12"><Link to="/new">
      <FontAwesomeIcon icon={faFolderOpen} /> New Post
      </Link>
    </button>
  )
}
export default NewButton