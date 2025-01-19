import { Link } from "react-router-dom";

import './css/output.css'
import './css/Index.css'

// Images
import logo from './assets/lockedin-logo.png'
import wave from './assets/solo-wave.png'
import pfp from './assets/placeholder-pfp.jpg'
import sob from './assets/solo-sob.png'
import laser from './assets/solo-laser-eyes.png'



function JobApp(){
    return(
        <>
            <header class="mx-[10rem] mt-[1rem]"> 
                <nav class="flex ">
                    <Link to="/">
                        <img src={logo} alt="Home"
                            class="h-[3rem]" />
                    </Link>

                    <Link to="/">
                        <p>LOG IN</p>
                    </Link>
                </nav>

                <div class="flex relative mt-[5rem]">
                    <div>
                        {/* Heading */}
                        <h1 class="font-semibold text-[2.5rem]">
                            Application&nbsp; 
                            <span id="username" class="dark-blue">
                                Tracker</span>
                        </h1>
                        {/* Subheading */}
                        <p>
                        You’re not done until the green check <span class="font-bold">says so</span>.
                        </p>
                    </div>

                    <img src={laser} alt="Cartoon-styled blue owl with yellow lasers shooting from his eyes that are sparkling."
                        class="h-[16rem] left-auto relative top-[-2rem]" />
                </div>
            </header>

    

            <main class="relative top-[-4rem] bg-[#88C7E8] px-[10rem]">
                <div class="grid grid-cols-2 p-[1.5rem] gap-x-[1.5rem]">
                    <div class="grid gap-y-[1rem]">
                        
                    </div>
                
                    <section class="bg-[#FFFFFF] row-span-2 p-[1.5rem] rounded-card">
                        <h2 class="font-semibold display-font text-center">YOUR STATS</h2>
                        <img src={pfp}
                            class="rounded-[50%] w-[10rem] mx-auto border-[0.2rem] border-[#FFFFFF] mt-[0.5rem]" />
                        <p class="text-[1.5rem] font-semibold display-font text-[#88C7E8]">
                            Yonka
                        </p>
                    </section>
                </div>

                <div class="blue-rectangle absolute top-[50%] left-[10%] w-[300px] h-[150px] rounded-[20px] bg-[#1E40AF] z-10"></div>

            </main>

        </>
    )

}

export default JobApp;