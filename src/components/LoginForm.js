import React, { useState } from 'react'

const LoginForm = ({logIn, errorMessage}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (event) => {
    const value = event.currentTarget.value;
    setUsername(value);
  };
  const changePassword = (event) => {
	const value = event.currentTarget.value;
	setPassword(value);
  };
    
  const handleLogIn = (e) => {
	e.preventDefault();
	logIn({ username, password });
	};
    return (
        <div className="z-50 absolute w-64 top-0 right-0 m-2 mt-24">
        <form className="bg-teal-400 shadow-md px-8 pt-6 pb-8"
            onSubmit={handleLogIn}>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="username" 
            type="email" 
            onChange={changeUsername}
            placeholder="name@example.com"
            required    
            />
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
            </label>
            <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            type="password" 
            onChange={changePassword}
            placeholder="******************" 
            required
            />
        </div>
            {errorMessage && (<div className="mb-6 text-red-700 text-sm">{errorMessage}</div>)}
            <div className="flex items-center justify-between">
            <button
			className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
			type="submit">
			Sign In
			</button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800" 
            href="mailto:eva@hamburgcodingschool.com?subject=Forgot Password Project Final&body=Sorry, Eva, I forgot my password. Can you send me a new one?">
            Forgot?
            </a>
        </div>
        </form>
        </div>
    )
}

export default LoginForm