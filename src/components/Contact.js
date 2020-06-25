import React from 'react';

function Contact() {
  
  return (
    <div className="h-1/1 bg-gray-400 m-2">
      <div className="p-6">
        <h1 style={{ fontFamily: 'ImpactLabel'}} className="text-2xl mb-2">&nbsp;Contact&nbsp;</h1>
        <p className="text-gray-700 text-base">
          Welcome to my Travel Blog. This is a selection of places I have been in the last few years. 
          Surf the map, click on places you are interested in, and read about my impressions. 
          I hope you enjoy this tour du monde from the comfort of your screen.</p>
      </div>
      <div className="px-6 py-0 text-gray-700 text-base">
        <p className="flex"> Name:&nbsp;
        <p style={{ fontFamily: 'PermanentMarker-Regular'}}>Eva Dressel </p> </p> 
        <p className="flex">School:&nbsp;
        <p style={{ fontFamily: 'PermanentMarker-Regular'}}>Hamburg Coding School </p></p>
        <p className="flex">Address:&nbsp;
        <p style={{ fontFamily: 'PermanentMarker-Regular'}}>Borselstraße 7, 22765 Hamburg</p></p>
        <p className="flex">Email:&nbsp;
        <p style={{ fontFamily: 'PermanentMarker-Regular'}}>eva@hamburgcodingschool.com </p></p>
        <p className="flex">WhatsApp:&nbsp;
        <p style={{ fontFamily: 'PermanentMarker-Regular'}}>+56 9 5736 8975</p></p>
      </div>
      <div className="px-6 py-6">
        <p className="text-gray-700 text-base">
          I created this project as part of a training course at Hamburg Coding School.
        </p>
      </div>
    </div>
    )
  }
export default Contact