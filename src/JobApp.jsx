import { Link } from "react-router-dom";

import './css/Index.css';
import './css/JobApp.css';
import './css/output.css';

// Images
import logo from './assets/lockedin-logo.png';
import clouds from './assets/orange-clouds.png';
import sob from './assets/solo-sob.png';

import ExternalAppEmbed from './tableAPI';

function JobApp() {
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
                            Leet
                            <span id="username" class="dark-blue">
                                Code</span>
                        </h1>
                        {/* Subheading */}
                        <p class="text-[#FFFFFF]">
                            You’re not done until the green check <span class="font-bold">says so</span>.
                        </p>
                    </div>

                    <img src={sob} alt="Cartoon-styled blue owl raising one arm up in a wave, with its mouth wide open in a smile."
                        class="h-[20rem] relative left-[5rem] top-[-2rem]" />
                </div>

                <div class="">
                    <img src={clouds}
                        class="clouds" />
                </div>

                <div class="clouds"></div>
            </header>

            <div class="orange-strip"></div>

            <main class="relative px-[10rem] bg-gradient-to-b from-[#FF9B5E] via-[#FFB063] to-[#FFD86D] from-50%">
                <div class="grid grid-cols-1 p-[1.5rem] gap-x-[1.5rem]">
                    {/* <div class="info jobapp grid gap-y-[1rem]">

                    </div> */}

                    {/* <section class="info jobapp row-span-2 p-[1.5rem] rounded-card">
                    </section> */}
                    <ExternalAppEmbed />
                </div>
                {/* <LeetCodeStats showFullStats={isFullStatsPage} /> */}


            </main>

        </>
    )

}

export default JobApp;