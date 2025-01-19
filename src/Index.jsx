import { Link } from "react-router-dom";
//import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleSignIn from './GoogleSignIn';

<script src="https://apis.google.com/js/platform.js" async defer></script>

import './css/Index.css';
import './css/output.css';

<meta name="google-signin-client_id" content="515157876394-233k85q6uq24m1iuuku3idjmspgqnko9.apps.googleusercontent.com"></meta>


// Images
import logo from './assets/lockedin-logo.png';
import pfp from './assets/placeholder-pfp.jpg';
import wave from './assets/solo-wave.png';
import LeetCodeStats from './LeetCodeStats';
//import GoogleSignIn from "./auth";

function Index() {

    
    return (
        <>
            <header class="mx-[10rem] mt-[1rem]">
                <nav class="flex ">
                    <Link to="/">
                        <img src={logo} alt="Home"
                            class="h-[3rem]" />
                    </Link>


                    
                    <div><GoogleSignIn /></div>
                </nav>
                
        

                <div class="flex relative mt-[5rem]">
                    <div>
                        {/* Heading */}
                        <h1 class="font-semibold text-[2.5rem]">
                            Hello,&nbsp;
                            <span id="username" class="dark-blue">
                                Yonka!</span>
                        </h1>
                        {/* Subheading */}
                        <p>
                            Nice to meet you! I'm here to help you <span class="font-bold">lock in</span> and get a job!
                        </p>
                    </div>

                    <img src={wave} alt="Cartoon-styled blue owl raising one arm up in a wave, with its mouth wide open in a smile."
                        class="h-[16rem] left-auto relative top-[-2rem]" />
                </div>
            </header>

            <main class="relative top-[-4rem] bg-[#88C7E8] px-[10rem]">
                <div class="grid grid-cols-2 p-[1.5rem] gap-x-[1.5rem]">
                    <div class="grid gap-y-[1rem]">
                        <section class="info rounded-card">
                            Lorem ipsum
                        </section>

                        <section class="info rounded-card">
                            Lorem ipsum
                        </section>
                    </div>

                    <section class="bg-[#FFFFFF] row-span-2 p-[1.5rem] rounded-card">
                        <h2 class="font-semibold display-font text-center">YOUR STATS</h2>
                        <img src={pfp}
                            class="rounded-[50%] w-[10rem] mx-auto border-[0.2rem] border-[#FFFFFF] mt-[0.5rem]" />
                        <p class="text-[1.5rem] font-semibold display-font text-[#88C7E8]">
                            Yonka
                            <LeetCodeStats />
                        </p>

                    </section>
                </div>
            </main>

        </>
    )

}

export default Index;