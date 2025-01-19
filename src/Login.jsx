import { Link } from "react-router-dom";
import { useState } from 'react';

import './css/Login.css';
import './css/output.css';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

import logo from './assets/lockedin-logo.png'

function Login(){
    const [user, setUser] = useState(null);

    const handleLoginSuccess = (credentialResponse) => {
        console.log('Login Success:', credentialResponse);

        const decoded = jwtDecode(credentialResponse.credential);
        setUser(decoded); // Store user info in state
        // Log the decoded user information
        console.log('Login Success:', decoded);

        // Example: Access user data
        console.log(`User Name: ${decoded.name}`);
        console.log(`User Email: ${decoded.email}`);
      };
    
      const handleLoginFailure = () => {
        console.log('Login Failed');
      };


      const handleLogout = () => {
        //googleLogout();
        setUser(null); // Clear user data from state
        console.log('User logged out');
        //window.location.reload();
    };

    const isFullStatsPage = false;
    return (
        <>
            <header class="mx-[10rem] mt-[1rem]">
                <nav class="flex ">
                    <Link to="/">
                        <img src={logo} alt="Home"
                            class="h-[3rem]" />
                    </Link>

                    <Link to="/login" class="button light-blue-bg ml-auto">
                        LOG IN
                    </Link>

                    {/* {user ? (
                        <div className="flex items-center gap-4">
                            <p>Welcome, {user.name}</p>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <GoogleLogin
                            onSuccess={handleLoginSuccess}
                            onError={handleLoginFailure}
                        />
                    )} */}
                </nav>

            </header>

            <main class="mx-[10rem] mt-[5rem]">
                <section class="bg-[#88C7E8] rounded-2xl grid grid-cols-1 mx-[15rem] p-[2rem]">
                    <h1 class="white-text text-center font-bold text-[2.25rem]">
                        LOG IN
                    </h1>

                    <form class="grid grid-rows-3">
                        <div class="grid grid-rows-2">
                            <label for="email">Email</label>
                            <input type="text" id="email" placeholder="example@email.com" />
                        </div>

                        
                        <div class="grid grid-rows-2">
                            <label for="password">Password</label>
                            <input type="text" id="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"/>
                        </div>

                        <button class="text-center button dark-blue-bg mt-[1rem]">
                            LOG IN
                        </button>
                    </form>
                    
                
                    {user ? (
                        <div className="flex items-center gap-4">
                            <p>Welcome, {user.name}</p>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <GoogleLogin
                            onSuccess={handleLoginSuccess}
                            onError={handleLoginFailure}
                        />
                    )}

                    

                    <br></br>
                    <h1 class="white-blue text-center font-bold text-[1rem]">
                    <a href="/signup">  DON'T HAVE AN ACCOUNT? SIGN UP!</a>
                    </h1>



                    

                </section>
            </main>

            
        </>

    );

}

export default Login;