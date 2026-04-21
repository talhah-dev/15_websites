const navbar = document.getElementById("navbar");

navbar.innerHTML = `
    <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_10px_35px_rgba(2,45,98,0.08)]">
        <nav class="mx-auto w-full max-w-7xl px-6 py-6 sm:px-10 lg:px-16">
            <div class="flex items-center justify-between gap-6">
                <a href="index.html" class="flex items-center">
                    <span class="text-2xl font-bold tracking-tight text-[#022d62]">
                        Insurance <span class="text-[#f28a03]">Near Me</span>
                    </span>
                </a>

                <div class="hidden items-center gap-2 lg:flex">
                    <a href="index.html"
                        class="rounded-full px-4 py-2 text-sm font-semibold text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 hover:text-[#f28a03]">
                        Home
                    </a>

                    <a href="about.html"
                        class="rounded-full px-4 py-2 text-sm font-semibold text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 hover:text-[#f28a03]">
                        About
                    </a>

                    <div class="group relative">
                        <a href="services.html"
                            class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 hover:text-[#f28a03]">
                            Services
                            <i class="fa-solid fa-chevron-down text-[10px] transition duration-300 group-hover:rotate-180"></i>
                        </a>

                        <div class="pointer-events-none absolute right-0 top-full pt-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                            <div class="w-80 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-[0_24px_60px_rgba(2,45,98,0.12)]">
                                <div class="grid gap-2">
                                    <a href="health-insurance.html" class="flex items-center justify-between rounded-2xl px-4 py-3 transition duration-300 hover:bg-slate-50">
                                        <span class="text-sm font-bold text-[#022d62]">Health Insurance</span>
                                        <i class="fa-solid fa-arrow-right text-sm text-[#022d62]"></i>
                                    </a>

                                    <a href="auto-insurance.html" class="flex items-center justify-between rounded-2xl px-4 py-3 transition duration-300 hover:bg-slate-50">
                                        <span class="text-sm font-bold text-[#022d62]">Auto Insurance</span>
                                        <i class="fa-solid fa-arrow-right text-sm text-[#022d62]"></i>
                                    </a>

                                    <a href="homeowners-insurance.html" class="flex items-center justify-between rounded-2xl px-4 py-3 transition duration-300 hover:bg-slate-50">
                                        <span class="text-sm font-bold text-[#022d62]">Homeowners Insurance</span>
                                        <i class="fa-solid fa-arrow-right text-sm text-[#022d62]"></i>
                                    </a>

                                    <a href="life-insurance.html" class="flex items-center justify-between rounded-2xl px-4 py-3 transition duration-300 hover:bg-slate-50">
                                        <span class="text-sm font-bold text-[#022d62]">Life Insurance</span>
                                        <i class="fa-solid fa-arrow-right text-sm text-[#022d62]"></i>
                                    </a>

                                    <a href="business-insurance.html" class="flex items-center justify-between rounded-2xl px-4 py-3 transition duration-300 hover:bg-slate-50">
                                        <span class="text-sm font-bold text-[#022d62]">Business Insurance</span>
                                        <i class="fa-solid fa-arrow-right text-sm text-[#022d62]"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="faq.html"
                        class="rounded-full px-4 py-2 text-sm font-semibold text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 hover:text-[#f28a03]">
                        FAQ
                    </a>

                    <a href="contact-us.html"
                        class="rounded-full px-4 py-2 text-sm font-semibold text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 hover:text-[#f28a03]">
                        Contact Us
                    </a>
                </div>

                <button id="mobile-menu-toggle" type="button"
                    class="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 lg:hidden">
                    <i id="mobile-menu-icon" class="fa-solid fa-bars text-lg"></i>
                </button>
            </div>

            <div id="mobile-menu" class="grid grid-rows-[0fr] transition-all duration-500 ease-in-out lg:hidden">
                <div class="overflow-hidden">
                    <div class="mt-4 border-t border-slate-200 pt-4">
                        <div class="space-y-2">
                            <a href="index.html"
                                class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 hover:text-[#f28a03]">
                                Home
                            </a>

                            <a href="about.html"
                                class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 hover:text-[#f28a03]">
                                About
                            </a>

                            <div class="rounded-[1.5rem] border border-slate-200 bg-white">
                                <button id="mobile-services-toggle" type="button"
                                    class="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-[#022d62] transition duration-300 hover:text-[#f28a03]">
                                    <span>Services</span>
                                    <i id="mobile-services-icon" class="fa-solid fa-chevron-down text-[11px] transition duration-300"></i>
                                </button>

                                <div id="mobile-services-menu" class="grid grid-rows-[0fr] transition-all duration-500 ease-in-out">
                                    <div class="overflow-hidden">
                                        <div class="space-y-1 px-3 pb-3">
                                            <a href="services.html"
                                                class="block rounded-2xl px-4 py-3 text-sm text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 hover:text-[#f28a03]">
                                                All Services
                                            </a>

                                            <a href="health-insurance.html"
                                                class="block rounded-2xl px-4 py-3 text-sm text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 hover:text-[#f28a03]">
                                                Health Insurance
                                            </a>

                                            <a href="auto-insurance.html"
                                                class="block rounded-2xl px-4 py-3 text-sm text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 hover:text-[#f28a03]">
                                                Auto Insurance
                                            </a>

                                            <a href="homeowners-insurance.html"
                                                class="block rounded-2xl px-4 py-3 text-sm text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 hover:text-[#f28a03]">
                                                Homeowners Insurance
                                            </a>

                                            <a href="life-insurance.html"
                                                class="block rounded-2xl px-4 py-3 text-sm text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 hover:text-[#f28a03]">
                                                Life Insurance
                                            </a>

                                            <a href="business-insurance.html"
                                                class="block rounded-2xl px-4 py-3 text-sm text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 hover:text-[#f28a03]">
                                                Business Insurance
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href="faq.html"
                                class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 hover:text-[#f28a03]">
                                FAQ
                            </a>

                            <a href="contact-us.html"
                                class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#022d62] transition duration-300 hover:bg-[#022d62]/5 hover:text-[#f28a03]">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
`;

const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const mobileServicesToggle = document.getElementById("mobile-services-toggle");
const mobileServicesMenu = document.getElementById("mobile-services-menu");
const mobileServicesIcon = document.getElementById("mobile-services-icon");

mobileMenuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("grid-rows-[1fr]");

    if (isOpen) {
        mobileMenu.classList.remove("grid-rows-[1fr]");
        mobileMenu.classList.add("grid-rows-[0fr]");
        mobileMenuIcon.classList.remove("fa-xmark");
        mobileMenuIcon.classList.add("fa-bars");

        mobileServicesMenu.classList.remove("grid-rows-[1fr]");
        mobileServicesMenu.classList.add("grid-rows-[0fr]");
        mobileServicesIcon.classList.remove("rotate-180");
    } else {
        mobileMenu.classList.remove("grid-rows-[0fr]");
        mobileMenu.classList.add("grid-rows-[1fr]");
        mobileMenuIcon.classList.remove("fa-bars");
        mobileMenuIcon.classList.add("fa-xmark");
    }
});

mobileServicesToggle.addEventListener("click", () => {
    const isOpen = mobileServicesMenu.classList.contains("grid-rows-[1fr]");

    if (isOpen) {
        mobileServicesMenu.classList.remove("grid-rows-[1fr]");
        mobileServicesMenu.classList.add("grid-rows-[0fr]");
        mobileServicesIcon.classList.remove("rotate-180");
    } else {
        mobileServicesMenu.classList.remove("grid-rows-[0fr]");
        mobileServicesMenu.classList.add("grid-rows-[1fr]");
        mobileServicesIcon.classList.add("rotate-180");
    }
});
