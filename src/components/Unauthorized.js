import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="h-1/1 bg-gray-400 m-2">
      <div className="p-6">
      <h1 className="text-2xl mb-2" style={{ fontFamily: 'ImpactLabel'}}>&nbsp;403&nbsp;</h1>
      <p className="text-lg text-gray-700" >If you are not logged in, you cannot access this path. <br/> Please go back to Home.</p>
      </div>
      <iframe width="560" height="315" className="px-6 pb-4"
        title="Rick Roll'd"
        src="https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded">
        <Link to='/'>Back to Home</Link>
      </button>
    </div>
  )
}

export default Unauthorized;