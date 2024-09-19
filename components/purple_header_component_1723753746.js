/* Summary: HTML file that describes the header section including:
1. Site branding with a logo on the left.
2. Desktop navigation menu with links to different pages in the middle.
3. Desktop sign-in and sign-up links on the right.
*/ 

Vue.component("purple_header_component_1723753746", {
    template: `
    <header class="w-full z-30" id="header-section-container">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 bg-opacity-30 bg-purple-900 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
            <div class="flex items-center justify-between h-16 md:h-20">
    
                <div id="site-branding" class="flex-1"><a id="logo-link" class="inline-flex" href="index.html" aria-label="Cruip"><img id="logo-image" class="max-w-none" src="./images/logo.svg" width="38" height="38" alt="Stellar"></a></div>
    
                <nav id="desktop-navigation" class="hidden md:flex md:grow">
    
                    <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center">
                        <li><a id="Home-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-pink-200 hover:text-white" href="Home.html">Home</a></li>
                        <li><a id="Browse-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-pink-200 hover:text-white" href="Browse.html">Browse</a></li>
                        <li><a id="Sell-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-pink-200 hover:text-white" href="Sell.html">Sell</a></li>
                        <li><a id="Compare-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-pink-200 hover:text-white" href="Compare.html">Compare</a></li>
                        <li><a id="Support-link" class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-pink-200 hover:text-white" href="Support.html">Support</a></li>
                    </ul>
    
                </nav>
    
                <ul id="desktop-sign-in-links" class="flex-1 flex justify-end items-center">
                    <li><a id="sign-in-link" class="font-medium text-sm whitespace-nowrap transition duration-150 ease-in-out text-pink-200 hover:text-white" href="signin.html">Sign in</a></li>
                    <li class="ml-6"><a id="sign-up-link" class="btn-sm transition duration-150 ease-in-out w-full group relative text-white hover:text-pink-200 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-full px-4 py-2 shadow-lg" href="signup.html"><span class="relative inline-flex items-center">Sign up <span id="sign-up-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-pink-200">-&gt;</span></span></a></li>
                </ul>

                <div class="flex-1 flex justify-end items-center ml-4">
                    <button id="hadoken-button" class="btn-sm transition duration-150 ease-in-out text-white hover:text-yellow-300 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-full px-4 py-2 shadow-lg flex items-center" @click="performHadoken">
                        <i class='bx bxs-hot mr-2'></i>
                        Hadoken!
                    </button>
                </div>

                <div id="mobile-menu" class="md:hidden flex items-center ml-4" x-data="{ expanded: false }">
    
                    <button id="hamburger-button" class="hamburger" :class="{ 'active': expanded }" @click.stop="expanded = !expanded" aria-controls="mobile-nav" :aria-expanded="expanded">
                        <span class="sr-only">Menu</span>
                        <svg id="hamburger-icon" class="w-5 h-5 fill-current transition duration-150 ease-in-out text-pink-200 hover:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <rect y="2" width="20" height="2" rx="1" />
                            <rect y="9" width="20" height="2" rx="1" />
                            <rect y="16" width="20" height="2" rx="1" />
                        </svg>
                    </button>
    
                    <nav id="mobile-nav" class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" x-ref="mobileNav" :style="expanded ? 'max-height: ' + $refs.mobileNav.scrollHeight + 'px; opacity: 1' : 'max-height: 0; opacity: .8'" @click.outside="expanded = false" @keydown.escape.window="expanded = false" x-cloak>
                        <ul id="mobile-nav-list" class="border border-transparent rounded-lg px-4 py-1.5 bg-opacity-70 bg-purple-900 backdrop-filter backdrop-blur-lg">
                            <li><a id="mobile-Home-link" class="flex font-medium text-sm py-1.5 text-pink-200 hover:text-white" href="Home.html">Home</a></li>
                            <li><a id="mobile-Browse-link" class="flex font-medium text-sm py-1.5 text-pink-200 hover:text-white" href="Browse.html">Browse</a></li>
                            <li><a id="mobile-Sell-link" class="flex font-medium text-sm py-1.5 text-pink-200 hover:text-white" href="Sell.html">Sell</a></li>
                            <li><a id="mobile-Compare-link" class="flex font-medium text-sm py-1.5 text-pink-200 hover:text-white" href="Compare.html">Compare</a></li>
                            <li><a id="mobile-Support-link" class="flex font-medium text-sm py-1.5 text-pink-200 hover:text-white" href="Support.html">Support</a></li>
                        </ul>
                    </nav>
    
                </div>
    
            </div>
        </div>
    </header>`,
        data() {
            return {
                expanded: false, 
                tab: null,
            };
        },
        methods: {
            // Hadoken method
            performHadoken() {
                console.log("Hadoken!");
                // Add your Hadoken logic here
            }
            // End of Hadoken method
        },
    });
                    