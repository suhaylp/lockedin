import { Link } from "react-router-dom";

import './css/Index.css';
import './css/LeetCode.css';
import './css/output.css';

// Images
import logo from './assets/lockedin-logo.png';
import laser from './assets/solo-laser-eyes-clouds.png';
import hip from './assets/solo-hip.png';
import computer from './assets/solo-coding.png';
import clouds from './assets/purple-clouds.png';
import LeetCodeStats from './LeetCodeStats';

function LeetCode() {
    const isFullStatsPage = true;
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
                        <h1 class="font-semibold text-[2.5rem] text-[#FFFFFF]">
                            LeetCode&nbsp;
                            <span id="username" class="light-blue">
                                Tracker</span>
                        </h1>
                        {/* Subheading */}
                        <p class="text-[#FFFFFF] mb-[3rem]">
                            You’re not done until the green check <span class="font-bold">says so</span>.
                        </p>

                        <a href="https://leetcode.com/" class="button light-blue-bg">GO TO LEETCODE</a>
                    </div>

                    <img src={laser} alt="Cartoon-styled blue owl raising one arm up in a wave, with its mouth wide open in a smile."
                        class="h-[20rem] relative left-[5rem] top-[-2rem]" />
                </div>

                <div class="">
                    <img src={clouds}
                        class="clouds" />
                </div>

                <div class="clouds"></div>
            </header>

            <div class="purple-strip"></div>

            <main class="relative px-[10rem] bg-gradient-to-b from-[#4756A2] to-[#2F135F]">
                <div class="grid grid-cols-2 gap-x-[1.5rem] pt-[5rem]">
                    <div class="relative info grid gap-y-[1rem] p-[1.5rem] rounded-card h-[12rem]">
                        <p class="text-[#36AC4F] font-bold text-[1.25rem]/[1.25rem] ml-[0.75rem] pt-[2rem]"><span class="block display-font text-[3.5rem]">9</span> <span class="block mt-[1.5rem]">SOLVED</span><span class="block">TODAY!</span></p>
                        <img src={hip} alt="Blue cartoon owl with round glasses holding a Google job offer" 
                            class="h-[9rem] absolute right-0 bottom-[0] pr-[3rem]"/>
                    </div>

                    <div class="relative info grid gap-y-[1rem] p-[1.5rem] rounded-card h-[12rem]">
                        <p class="text-[#36AC4F] font-bold text-[1.25rem]/[1.25rem] ml-[0.75rem] pt-[2rem]"><span class="block display-font text-[3.5rem]">89</span> <span class="block mt-[1.5rem]">SOLVED</span><span class="block">IN TOTAL!</span></p>
                        <img src={computer} alt="Blue cartoon owl with round glasses holding a Google job offer" 
                            class="h-[8.75rem] absolute right-0 bottom-[0] rounded-xl"/>
                    </div>

                    <div class="info col-span-2 mt-[1rem] p-[1.5rem] rounded-card">
                        <LeetCodeStats showFullStats={isFullStatsPage} />


                    </div>
                </div>


            </main>

        </>
    )

}

export default LeetCode;