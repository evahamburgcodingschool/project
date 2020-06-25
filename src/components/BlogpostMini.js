import React from 'react'
import { Link } from "react-router-dom";

const BlogpostMini = ({ blogpost }) => {
  const avatar = "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png"  
  
  return (
    <div className="w-1/2 overflow-hidden mb-4 bg-gray-200 flex">
      <div className="rounded shadow-lg">
        <img className="w-full px-3 pt-3" src={blogpost.img.src} alt={blogpost.img.alt}></img>
        <div className="px-6 py-4">
          <h1 style={{ fontFamily: 'ImpactLabel'}} className="text-xl text-black mb-2">&nbsp;{blogpost.title}&nbsp;</h1>
          <div className="flex text-gray-700 text-base text-left">
            visited:&nbsp;
            <h2 style={{ fontFamily: 'PermanentMarker-Regular'}}>{blogpost.visitingDate}</h2><br/> 
          </div>
          <div className="flex items-center mt-2">
            <img className="w-10 h-10 rounded-full mr-4" src={blogpost.avatar ? blogpost.avatar : avatar} alt={blogpost.author ? blogpost.author : "Avatar"}></img>
            <h2 className="text-lg text-gray-700 leading-none" style={{ fontFamily: 'PermanentMarker-Regular'}}>{blogpost.author ? blogpost.author : "Traveler"}</h2>
          </div>
            <p className="text-sm text-left mt-2"><Link to={`/post/${blogpost.id}`}>read more...</Link></p>
          </div>
        </div>
      <div className="bg-gray-400">&emsp;</div>
    </div>
  )
}

export default BlogpostMini