import { Link } from "react-router-dom";
import { useState } from 'react';

import './css/Login.css';
import './css/output.css';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

import logo from './assets/lockedin-logo.png'
import clouds from './assets/clouds.png'
import coop from './assets/where-coop.png'

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

                    <Link to="/" class="button light-blue-bg ml-auto">
                        LOG IN
                    </Link>
                </nav>

                <div class="">
                    <img src={clouds}
                        class="clouds" />
                </div>

                <div class="clouds"></div>
            </header>

            <div class="white-strip"></div>

            <main class="bg-gradient-to-b from-[#FFFFFF] to-[#86C3F5] mt-[25rem]">
                <section class="absolute top-[16rem] left-[27rem] bg-[#88C7E8] rounded-2xl grid grid-cols-1 p-[2rem] z-10">
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

                        <button class="text-center button dark-blue-bg my-[1rem]">
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
                    <a href="/signup" class="text-[#0268C8]">  DON'T HAVE AN ACCOUNT? <span class="underline">SIGN UP!</span></a>
                    </h1>



                    

                </section>

                <img src={coop} alt="Solo getting angry that you don't have a coop" 
                class="absolute left-[20vw] z-0 h-[30rem] top-[9rem]"/>
            </main>

            
        </>

    );

}

export default Login;