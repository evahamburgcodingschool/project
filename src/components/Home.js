import React, { useState } from 'react'
import BlogpostMini from './BlogpostMini'
import Marker from './Marker'
import InfoWindow from "./InfoWindow";
import GoogleMapReact from 'google-map-react';

function Home({ blogpost }) {
  const keyConfig = { key: '' }
  const newest = blogpost.sort((post1, post2) => post2.visitingDate.localeCompare(post1.visitingDate))
  const center = newest[0].location

  const [selected, setSelected] = useState(null);
  const handleShowInfo = blogpost => {
    setSelected(blogpost);
  };
  const handleCloseInfo = event => {
    setSelected(null);
  };

  return (
    <div className="h-1/1 flex flex-row bg-gray-400 m-2">
      <div className="w-1/2 flex flex-wrap justify-between text-gray-700 text-center bg-gray-400 pl-4 pt-4 ml-0 mr-0">

        {blogpost
          //.sort((post1, post2) => post2.visitingDate.localeCompare(post1.visitingDate))
          .map( blogpost => (
            <BlogpostMini key={blogpost.id} blogpost={blogpost}
            />
          ))}
      </div>
  
      <div style={{ height: "100vh" }} className="w-1/2 text-center bg-gray-400 pr-4 pt-4 float-right">
        <GoogleMapReact 
          distanceToMouse={()=>{}}
          bootstrapURLKeys={keyConfig}
          center={center}
          defaultZoom={8}
        >
        {blogpost.map( blogpost => (
          <Marker 
            key={blogpost.id} 
            lat={blogpost.location.lat} 
            lng={blogpost.location.lng}
            showInfo={event => handleShowInfo(blogpost)}
          />
        ))}
        {selected && (
          <InfoWindow
            lat={selected.lat}
            lng={selected.lng}
            blogpost={selected}
            closeInfo={handleCloseInfo}
          />
        )}    

        </GoogleMapReact>
        <p class="text-center text-gray-700 text-xs mt-2">
        &copy;2020 Eva Dressel. All rights reserved.
        </p>
      </div>
    </div>
  );
}
  
export default Home;