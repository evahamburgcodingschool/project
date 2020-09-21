import React from "react";
import { Link } from "react-router-dom";

const InfoWindow = ({ blogpost, closeInfo }) => {
  return (
    <section>
    <div className="relative w-48 h-48 border-solid px-4 py-4 overflow-hidden shadow-lg mb-4 ml-4 bg-yellow-300">
      <button type="button" onClick={closeInfo} style={{ fontFamily: 'PermanentMarker-Regular'}}
        className="absolute top-0 right-0 mb-2 py-1 px-2 text-gray-800 text-2xl">
        X</button>
      <h1 style={{ fontFamily: 'ImpactLabel'}} className="text-xl mt-2 mb-4">{blogpost.title}</h1>
      <div className="flex text-base text-gray-800 text-left mt-6">
      <p className="text-sm mt-1">visited:&nbsp;</p><h2 style={{ fontFamily: 'PermanentMarker-Regular'}}>{blogpost.visitingDate}</h2></div>
      <div className="flex items-center mt-2">
        <img className="w-10 h-10 rounded-full mr-3" src={blogpost.avatar} alt={blogpost.author}></img>
        <p style={{ fontFamily: 'PermanentMarker-Regular'}} className="text-base text-gray-800 leading-none">{blogpost.author}</p>
      </div>
      <p className="text-sm text-gray-800 text-left mt-2"><Link to={`/post/${blogpost.id}`}>read more...</Link></p>
    </div>
    </section>
  );
};

export default InfoWindow;




