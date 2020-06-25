import React from 'react'
import { Link, useParams } from "react-router-dom";
import Marker from './Marker'
import GoogleMapReact from 'google-map-react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'
import { faEdit} from '@fortawesome/free-solid-svg-icons'

const BlogpostDetail = ({ blogpost, user }) => {
  const keyConfig = { key: '' }
  
  const { id } = useParams();    
  const post = blogpost.find(p => {
    return (p.id === parseInt(id)) 
    })
  const center = post.location
  const avatar = "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png"

  return (
  <div className="h-1/1 bg-gray-400 m-2">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <Link to='/'>Back to Home</Link>
    </button>    
    <div className="flex flex-wrap text-gray-700 text-center bg-gray-400 px-4 py-2">
      <div className="w-1/2 rounded overflow-hidden bg-gray-200 shadow-lg mb-4">  
        <div className="px-6 py-4">
          <h1 style={{ fontFamily: 'ImpactLabel'}} className="text-3xl text-black my-2">&nbsp;{post.title}&nbsp;</h1>
          <div className="flex items-center justify-between mt-4">
            <div className="flex text-gray-700 text-lg text-left">visited:&nbsp;<h2 style={{ fontFamily: 'PermanentMarker-Regular'}}>{post.visitingDate}</h2></div>
            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-4" src={post.avatar ? post.avatar : avatar} alt={post.author ? post.author : "Avatar"}></img>
              <p className="text-lg text-gray-700 leading-none" style={{ fontFamily: 'PermanentMarker-Regular'}}>{post.author ? post.author : "Traveler"}</p>
            </div>
          </div>
        </div>
        <img className="w-full px-4" src={post.img.src} alt={post.img.alt}></img>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base text-left">{post.text}</p>
          <div className="flex items-center mt-4">
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            <div style={{ fontFamily: 'PermanentMarker-Regular'}} className="text-gray-700 text-lg text-left ml-2">{post.location.city}, {post.location.country}</div>
          </div>
          {user && (
          <div className="flex justify-end">
            <button className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <Link to={`/post/${post.id}/edit`}> <FontAwesomeIcon icon={faEdit} /> Update</Link>
            </button>    
          </div> )}
        </div>
      </div>
      <div style={{ height: "100vh" }} className="w-1/2 text-center bg-gray-400 pl-4 pb-2">
        <GoogleMapReact 
          distanceToMouse={()=>{}}
          bootstrapURLKeys={keyConfig}
          defaultCenter={center}
          defaultZoom={6}
        >
        <Marker 
          key={post.id} 
          lat={post.location.lat} 
          lng={post.location.lng}
        />
        </GoogleMapReact>
        <p class="text-center text-gray-700 text-xs mt-2">
        &copy;2020 Eva Dressel. All rights reserved.
        </p>
      </div>
    </div>
  </div>
  )
}

export default BlogpostDetail