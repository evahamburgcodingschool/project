import React from 'react'
import { Link } from 'react-router-dom';

const UserButton = ({user}) => {
  const avatar = "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png"

  let greeting = user => {
    let name = (user && user.displayName) ? user.displayName : "Traveler"
    return name
    }
  greeting(user)

  let image = user => {
    let pic = (user && user.photoURL) ? user.photoURL : avatar
    return pic
    }
  image(user)

  return (              
    <button className=""><Link to="/user">
      <div className="flex items-center inline-block w-30">
        <img className="w-6 h-6 rounded-full mr-2" src={image(user)} alt={greeting(user)}></img>
        <p className="text-gray-900 leading-none">Hi {greeting(user)}</p>
      </div>
    </Link></button>
    )
  }
  export default UserButton