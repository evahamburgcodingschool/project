import React from 'react'
import { Link, useHistory } from "react-router-dom";
import Background from '../background/legal-pad.png';

function NewPost({ db, user, blogpost }) {
    let history = useHistory();
    const avatarImage = "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png"

    let greeting = user => {
        let name = (user && user.displayName) ? user.displayName : "Traveler"
        return name
        }
    greeting(user)
    
    let image = user => {
        let pic = (user && user.photoURL) ? user.photoURL : avatarImage
        return pic
        }
    image(user)

    const handleSubmit = event => {
        event.preventDefault();
        const id = blogpost.length + 1  //Math.floor(Math.random() * 1000 + 10); 
        const title = event.target.elements.title.value;
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;
        const src = event.target.elements.image.value;
        const alt = city
        const lat = parseFloat(event.target.elements.latitude.value) ? parseFloat(event.target.elements.latitude.value) : 53.5511;
        const lng = parseFloat(event.target.elements.longitude.value) ? parseFloat(event.target.elements.longitude.value) : 9.9937;
        const author = greeting(user)
        const avatar = image(user)
        const visitingDate = event.target.elements.visitingDate.value;
        const text = event.target.elements.text.value;
        
        db.collection("projectfinal").add( 
            { id, title, visitingDate, text, author, avatar, location: { city, country, lat, lng }, img: { src, alt } }
            )
        .then(function(){
            console.log("Document successfully updated!")
        })
        .then(history.push("/"))
        .catch(function(error) {
            console.error("Error updating document: ", error);
        });
      };
    
    return(
        <div className="h-1/1 bg-gray-400 m-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to='/'>Cancel</Link>
        </button>   
        <h1 style={{ fontFamily: 'ImpactLabel'}} className="flex justify-center mb-4 text-2xl">&nbsp;New Blogpost&nbsp;</h1>
        <div className="flex justify-center">
        <form className="w-1/2 shadow-md px-8 pt-6 pb-8 mb-4" style={{ backgroundImage: `url(${Background})`, opacity: 1.0 }}
            onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Title
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="title" type="text" placeholder="Title"></input>
            </div>
            <div className="flex flex-wrap">
            <div className="mb-4 w-full md:w-1/2 pr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                City
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="city" type="text" placeholder="City" ></input>
            </div>
            <div className="mb-4 w-full md:w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                Country
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="country" type="text" placeholder="Country"></input>
            </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="visitingDate">
                Visiting Date
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="visitingDate" type="text" placeholder="2020-06-17"></input>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Image
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="image" type="text" placeholder="/images/City.jpg"></input>
            </div>
            <div className="flex flex-wrap">
            <div className="mb-4 w-full md:w-1/2 pr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="latitude">
                Latitude
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="latitude" type="text" placeholder="53.5511" min="-90" max="90" step=".000001"></input>
            </div>
            <div className="mb-4 w-full md:w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="longitude">
                Longitude
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                 id="longitude" type="text" placeholder="9.9937" min="-180" max="180" step=".000001"></input>
            </div>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text">
                Text
                </label>
                <textarea className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                id="text" type="text" rows="5" placeholder="Long form text"></textarea>    
            </div>
            <div className="flex items-center justify-between">
                <button className="justify-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
                type="submit">
                Save
                </button>
            </div>
            </form>
        </div> 
        <p class="text-center text-gray-700 text-xs pb-8">
        &copy;2020 Eva Dressel. All rights reserved.
        </p>
        </div>
    )
}

export default NewPost
