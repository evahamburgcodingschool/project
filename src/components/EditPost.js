import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from "react-router-dom";
import Background from '../background/legal-pad.png';

function EditPost( {db, blogpost, user} ) {
    const { id } = useParams();    
    const post = blogpost.find(p => {
      return (p.id === parseInt(id))
    })
    
    const [docu, setDocu] = useState("")
    const [title, setTitle] = useState("")
    const [city, setCity] = useState("")  
    const [country, setCountry] = useState("") 
    const [visitingDate, setVisitingDate] = useState("")
    const [imgSrc, setImgSrc] = useState("")
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")
    const [text, setText] = useState("")
    useEffect(() => {
        let mydoc = ""
        let mytitle = ""
        let mycity = ""              
        let mycountry = ""
        let myvisitingDate = ""
        let myimgSrc = ""
        let mylat = ""
        let mylng = ""
        let mytext = ""
        db.collection("projectfinal").get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                if (doc.data().id === parseInt(id)) {
                    mydoc = doc.id
                    mytitle = doc.data().title
                    mycity = doc.data().location.city       
                    mycountry = doc.data().location.country
                    myvisitingDate = doc.data().visitingDate
                    myimgSrc = doc.data().img.src
                    mylat = doc.data().location.lat
                    mylng = doc.data().location.lng
                    mytext = doc.data().text
                } 
            })
        })
        .then(() => {
            setDocu(mydoc)
            setTitle(mytitle)
            setCity(mycity)       
            setCountry(mycountry)
            setVisitingDate(myvisitingDate)
            setImgSrc(myimgSrc)
            setLat(mylat)
            setLng(mylng)
            setText(mytext)
        })   
    }, [db, id])

    let history = useHistory();

    let greeting = user => {
        let name = ""
        if (post.author !== "Traveler") {
            name = post.author
        } else if (user && user.displayName) {
            name = user.displayName
        } else {name = "Traveler"}
        return name
        }
    greeting(user)

    const avatarImage = "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png"
    let image = user => {
        let pic = ""
        if (post.avatar !== avatarImage) {
            pic = post.avatar
        } else if (user && user.photoURL) {
            pic = user.photoURL
        } else {pic = avatarImage}
        return pic
        }
    image(user)

    const handleUpdate = event => {
        event.preventDefault();
        let postDocRef = db.collection("projectfinal").doc(docu)
        postDocRef.set({ 
            id: post.id,
            author: post.author,
            avatar: post.author,
            title: post.title, 
            visitingDate: post.visitingDate, 
            text: post.text,  
            location: { 
                city: post.location.city, 
                country: post.location.country, 
                lat: post.location.lat, 
                lng: post.location.lng 
            }, 
            img: { 
                src: post.img.src,
                alt: post.img.alt
            }
        })

        db.collection("projectfinal").doc(docu).update({
            "id": post.id,
            "title": event.target.elements.title.value ? event.target.elements.title.value : post.title,
            "visitingDate": event.target.elements.visitingDate.value ? event.target.elements.visitingDate.value : post.visitingDate,
            "text": event.target.elements.text.value ? event.target.elements.text.value : post.text,
            "location.city": event.target.elements.city.value ? event.target.elements.city.value : post.location.city,
            "location.country": event.target.elements.country.value ? event.target.elements.country.value : post.location.country,
            "location.lat": parseFloat(event.target.elements.latitude.value) ? parseFloat(event.target.elements.latitude.value) : post.location.lat,
            "location.lng": parseFloat(event.target.elements.longitude.value) ? parseFloat(event.target.elements.longitude.value) : post.location.lng,
            "img.src": event.target.elements.image.value ? event.target.elements.image.value : post.img.src,
            "img.alt": post.location.city,
            "author": greeting(user), 
            "avatar": image(user)
        })
        .then(function(){
            console.log("Document successfully updated!")
        })
        .then(history.push(`/post/${post.id}`))
        .catch(function(error) {
            console.error("Error updating document: ", error);
        });
      };

    return(
        <div className="h-1/1 bg-gray-400 m-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to='/'>Cancel</Link>
        </button>   
        <h1 style={{ fontFamily: 'ImpactLabel'}}  className="flex justify-center mb-4 text-2xl">&nbsp;Edit Blogpost {post.title}&nbsp;</h1>
        <div className="flex justify-center">
        <form className="bg-red-400 w-1/2 shadow-md px-8 pt-6 pb-8 mb-4" style={{ backgroundImage: `url(${Background})`, opacity: 1.0 }}
            onSubmit={handleUpdate}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Title
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="title" type="text" defaultValue={title} placeholder="Title">
                </input>
            </div>
            <div className="flex flex-wrap">
            <div className="mb-4 w-full md:w-1/2 pr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                City
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="city" type="text" defaultValue={city} placeholder="City" ></input>
            </div>
            <div className="mb-4 w-full md:w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                Country
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="country" type="text" defaultValue={country} placeholder="Country"></input>
            </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="visitingDate">
                Visiting Date
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="visitingDate" type="text" defaultValue={visitingDate} placeholder="2020-06-17"></input>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Image
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="image" type="text" defaultValue={imgSrc} placeholder="/images/City.jpg"></input>
            </div>
            <div className="flex flex-wrap">
            <div className="mb-4 w-full md:w-1/2 pr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="latitude">
                Latitude
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="latitude" type="text" defaultValue={lat} placeholder="53.5511" min="-90" max="90" step=".000001" ></input>
            </div>
            <div className="mb-4 w-full md:w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="longitude">
                Longitude
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                 id="longitude" type="text" defaultValue={lng} placeholder="9.9937" min="-180" max="180" step=".000001"></input>
            </div>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text">
                Text
                </label>
                <textarea className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                id="text" type="text" rows="5" defaultValue={text} placeholder="Long form text"></textarea>    
            </div>
            <div className="flex items-center justify-between">
                <button className="justify-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
                type="submit">
                Update
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

export default EditPost