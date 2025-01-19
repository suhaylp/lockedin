import { Link } from "react-router-dom";

import './css/Index.css';
import './css/output.css';

// Images
import logo from './assets/lockedin-logo.png';
import pfp from './assets/placeholder-pfp.jpg';
import wave from './assets/solo-wave-clouds.png';
import clouds from './assets/clouds.png';
import track_leetcode from './assets/solo-coding.png'
import track_jobs from './assets/solo-google-offer.png';

import LeetCodeStats from './LeetCodeStats.jsx';

function Index() {
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
                        class="h-[20rem] relative left-[5rem] top-[-2rem]" />
                </div>

                <div class="">
                    <img src={clouds}
                        class="clouds" />
                </div>

                <div class="clouds"></div>
            </header>

            <div class="white-strip"></div>

            <main class="relative px-[10rem] bg-gradient-to-b from-[#FFFFFF] to-[#86C3F5]">
                <div class="grid grid-cols-2 gap-x-[1.5rem] pt-[5rem]">
                    <div class="grid grid-rows-2 gap-y-[1rem]">
                        <Link to="/jobapp">
                            <div class="relative info home rounded-card p-[1.5rem] h-[12rem] hover:scale-[105%] hover:drop-shadow-lg transition-transform">
                                <p class="text-[#CD7900] font-bold text-[1.25rem]/[1.25rem] text-right"><span class="block display-font">HAVE YOU APPLIED TO</span> <span class="block display-font">ANY JOBS TODAY?</span></p>
                                <img src={track_jobs} alt="Blue cartoon owl with round glasses holding a Google job offer" 
                                    class="h-[10rem] absolute bottom-[0]"/>
                            </div>
                        </Link>

                        <Link to="/leetcode">
                            <div class="relative info home rounded-card p-[1.5rem] h-[12rem]
                            hover:scale-[105%] hover:drop-shadow-lg transition-transform">
                                <p class="text-[#CD7900] font-bold text-[1.25rem]/[1.25rem] "><span class="block display-font">HAVE YOU PRACTICED</span> <span class="block display-font">YOUR LEETCODE TODAY?</span></p>
                                <img src={track_leetcode} alt="Blue cartoon owl with round glasses typing on a computer"
                                    class="h-[7rem] absolute right-0 bottom-[0] rounded-xl" />
                            </div>
                        </Link>
                    </div>

                    <div class="bg-[#FFD737] row-span-2 p-[1.5rem] rounded-card">
                        <img src={pfp}
                            class="rounded-[50%] w-[10rem] mx-auto border-[0] mt-[1rem]" />
                        <p class="text-[2rem] font-semibold display-font text-center text-[#EE9B00]">
                            Yonka
                        </p>

                        <div class="ml-[5.25rem] mt-[1.25rem] text-[#CD7900] text-[1.25rem]/[1.75rem]">
                            <LeetCodeStats showFullStats={isFullStatsPage}/>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )

}

export default Index;