import { Link } from "react-router-dom";

import './css/Index.css';
import './css/LeetCode.css';
import './css/output.css';

// Images
import logo from './assets/lockedin-logo.png';
import pfp from './assets/placeholder-pfp.jpg';
import laser from './assets/solo-laser-eyes-clouds.png';
import clouds from './assets/purple-clouds.png';
import LeetCodeStats from './LeetCodeStats';

function LeetCode() {
    const isFullStatsPage = true;
    return (
        <>
            <header class="mx-[10rem] mt-[1rem]">
                <nav class="flex ">
                    <Link to="login">
                        <img src={logo} alt="Home"
                            class="h-[3rem]" />
                    </Link>

                    <Link to="/" class="button light-blue-bg ml-auto">
                        LOG IN
                    </Link>
                </nav>

                <div class="flex relative mt-[5rem]">
                    <div>
                        {/* Heading */}
                        <h1 class="font-semibold text-[2.5rem] text-[#FFFFFF]">
                            Leet
                            <span id="username" class="dark-blue">
                                Code</span>
                        </h1>
                        {/* Subheading */}
                        <p class="text-[#FFFFFF]">
                            You’re not done until the green check <span class="font-bold">says so</span>.
                        </p>
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

            <main class="relative px-[10rem] bg-gradient-to-b from-[#4756A2] via-[#424893] to-[#2F135F] from-50%">
                <div class="grid grid-cols-2 p-[1.5rem] gap-x-[1.5rem]">
                    <div class="info grid gap-y-[1rem]">

                    </div>

                    <section class="info row-span-2 p-[1.5rem] rounded-card">
                    </section>
                </div>
                {/* <LeetCodeStats showFullStats={isFullStatsPage} /> */}


            </main>

        </>
    )

}

export default LeetCode;