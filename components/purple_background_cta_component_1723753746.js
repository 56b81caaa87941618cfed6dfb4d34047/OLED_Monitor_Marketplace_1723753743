/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1723753746", {
    template: `
    <section id="cta-section-container">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-white">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
                <!-- Radial gradient -->
                <!-- Video game themed background -->
                <div id="video-game-background" class="absolute inset-0 -z-10 overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-80"></div>
                    <div class="absolute inset-0 bg-[url('https://example.com/video-game-pattern.png')] bg-repeat opacity-20"></div>
                    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <!-- Blurred shape -->
                <!-- Game controller icon -->
                <div id="game-controller-icon" class="absolute top-4 right-4 text-white opacity-20">
                    <i class='bx bx-game bx-lg'></i>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium text-yellow-300 pb-3">Level Up Your Gaming Experience</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 h2 text-white pb-4">Discover Epic OLED Gaming Monitors</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-gray-300">Immerse yourself in breathtaking graphics with our selection of top-tier OLED gaming monitors. Experience true blacks, vibrant colors, and unparalleled contrast for the ultimate gaming adventure.</p></div>
                    <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-6 py-3 rounded-full shadow-lg">Start Your Quest <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
            };
        },
    });
                    