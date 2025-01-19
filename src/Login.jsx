import { Link } from "react-router-dom";

import './css/Login.css';
import './css/output.css';

import logo from './assets/lockedin-logo.png'

function Login(){
    return(
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

                </section>
            </main>

            
        </>

    );

}

export default Login;