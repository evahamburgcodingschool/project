import React from 'react'
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";

function UserProfile({user}) {
    const avatar = "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png"
    let history = useHistory();
        
    let greeting = user => {
        let name = ""
        if (user && user.displayName) {
            name = user.displayName
        } else if (user && user.email) {
            name = user.email
        } else {name = "Traveler"}
        return name
        }
    greeting(user)

    let image = user => {
        let pic = (user && user.photoURL) ? user.photoURL : avatar
        return pic
        }
    image(user)
   
    const handleUser = event => {
        event.preventDefault();
        firebase.auth().currentUser.updateProfile({
            displayName: event.target.elements.username.value ? event.target.elements.username.value : user.displayName,
            photoURL: event.target.elements.image.value ? event.target.elements.image.value : user.photoURL
          })
        .then(function(userRecord) {
            console.log('Successfully updated user', userRecord.toJSON());
        })
        .then(history.push("/"))
        .catch(function(error) {
            console.log('Error updating user:', error);
        });
      };
        
return(
    <div className="h-1/1 bg-gray-400 m-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to='/'>Cancel</Link>
        </button>   
        <h1 style={{ fontFamily: 'ImpactLabel'}} className="flex justify-center mb-4 text-2xl">&nbsp;Edit User Profile&nbsp;</h1>
        <div className="flex justify-center">
            <form className="bg-teal-400 w-1/2 shadow-md px-8 pt-6 pb-8 mb-4"
                onSubmit={handleUser}
                >
            <div className="flex text-gray-800">
                <p className="text-lg">Hi &nbsp;</p>
                <h1 className="text-lg" style={{ fontFamily: 'PermanentMarker-Regular'}}>{greeting(user)}</h1>
                <p className="text-lg">,</p>
            </div> 
            <p className="mb-4 text-base text-gray-800">do you want to change your user info?</p>       
            <div className="mb-4">
                <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="username">
                Username: {greeting(user)}
                <p className="text-xs italic text-gray-700 font-normal">If email, you have not set a username yet.</p>
                </label>
                <div className="block text-gray-800 text-sm font-bold mb-2">Change to</div>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="username" 
                type="text" 
                placeholder="Name"    
                />
            </div>
            <div className="flex justify-between mb-6">
                <div className="w-1/7 flex flex-wrap">
                    <label className="block text-gray-800 text-sm font-bold " htmlFor="image">
                    Image
                    </label>
                    <img className="w-10 h-10 rounded-full ml-1 text-xs italic" src={image(user)} alt="avatar not set"></img>
                </div>
                <div className="w-full flex flex-wrap">
                <div className="block text-gray-800 text-sm font-bold mb-2">Change to</div>
                
                <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                id="image" 
                type="text" 
                placeholder="/images/myAvatar.png" 
                />
                </div>
            </div>
                { /*error && <div className="mb-6 text-red-700 text-sm">{error}</div> */}
            <div className="flex items-center justify-between">
                <button
				className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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

export default UserProfile