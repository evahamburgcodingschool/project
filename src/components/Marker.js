import React from 'react'

export const Marker = ({ showInfo }) => {
  return <img 
  src="http://icons.iconarchive.com/icons/icons-land/vista-map-markers/96/Map-Marker-Push-Pin-1-Right-Azure-icon.png" 
  alt="Marker" 
  className="absolute w-10 h-10"
  style={{ top: "-40px",  left: "-20px"
  }}
  onClick={showInfo}
  />
}

export default Marker