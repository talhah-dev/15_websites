const footer = document.getElementById("footer");

footer.innerHTML = `
<footer class="relative overflow-hidden">
    <div class="absolute inset-0">
        <img src="./docs/assets/img8.jpg" alt="Houston AC footer background" class="h-full w-full object-cover">
    </div>
    <div class="absolute inset-0 bg-[#002d62]/92"></div>

    <div class="relative">
        <div class="mx-auto max-w-7xl px-6 pt-20 lg:px-8 lg:pt-28">
            <div class="rounded-[2.25rem] border border-white/10 bg-white/10 p-8 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-10 lg:p-14">
                <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[#d87339]">
                            Ready for Better Cooling?
                        </p>

                        <h2 class="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
                            Get Fast, Reliable AC Service Built for Houston Comfort
                        </h2>

                        <p class="mt-5 max-w-2xl text-base leading-8 text-white/80">
                            Contact Houston AC Repair today for dependable help with AC repair, installation,
                            maintenance, emergency service, and quality AC parts support.
                        </p>
                    </div>

                    <div class="flex flex-col gap-4 sm:flex-row lg:flex-col">
                        <a href="contact-us.html"
                            class="inline-flex w-full items-center justify-center rounded-full bg-[#d87339] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#c8652d]">
                            Get Free Estimate
                        </a>

                        <a href="services.html"
                            class="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#002d62]">
                            Explore Services
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="mx-auto max-w-7xl px-6 pb-10 pt-14 lg:px-8 lg:pb-12">
            <div class="grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-[1.15fr_0.8fr_0.9fr_1fr]">

                <div>
                    <a href="index.html" class="inline-flex items-center gap-3">
                        <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
                            <i class="fa-solid fa-snowflake text-xl"></i>
                        </span>
                        <div>
                            <p class="text-xl font-extrabold leading-tight text-white">Houston AC Repair</p>
                            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#d87339]">Texas Cooling Experts</p>
                        </div>
                    </a>

                    <p class="mt-6 max-w-md text-sm leading-7 text-white/75">
                        Houston AC Repair provides dependable cooling services for homes and businesses
                        with a focus on comfort, efficiency, fast response, and reliable long-term performance.
                    </p>

                    <div class="mt-6 flex gap-3">
                        <a href="#"
                            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-transparent text-white transition hover:border-[#d87339] hover:text-[#d87339]">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#"
                            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-transparent text-white transition hover:border-[#d87339] hover:text-[#d87339]">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#"
                            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-transparent text-white transition hover:border-[#d87339] hover:text-[#d87339]">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-extrabold text-white">Quick Links</h3>
                    <ul class="mt-6 space-y-3">
                        <li><a href="index.html" class="text-sm text-white/75 transition hover:text-[#d87339]">Home</a></li>
                        <li><a href="about.html" class="text-sm text-white/75 transition hover:text-[#d87339]">About</a></li>
                        <li><a href="services.html" class="text-sm text-white/75 transition hover:text-[#d87339]">Services</a></li>
                        <li><a href="faq.html" class="text-sm text-white/75 transition hover:text-[#d87339]">FAQ</a></li>
                        <li><a href="contact-us.html" class="text-sm text-white/75 transition hover:text-[#d87339]">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-extrabold text-white">Our Services</h3>
                    <ul class="mt-6 space-y-3">
                        <li><a href="ac-repair.html" class="text-sm text-white/75 transition hover:text-[#d87339]">AC Repair</a></li>
                        <li><a href="ac-installation.html" class="text-sm text-white/75 transition hover:text-[#d87339]">AC Installation</a></li>
                        <li><a href="ac-maintenance.html" class="text-sm text-white/75 transition hover:text-[#d87339]">AC Maintenance</a></li>
                        <li><a href="emergency-ac-repair.html" class="text-sm text-white/75 transition hover:text-[#d87339]">Emergency AC Repair</a></li>
                        <li><a href="ac-parts.html" class="text-sm text-white/75 transition hover:text-[#d87339]">AC Parts</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-extrabold text-white">Contact Info</h3>

                    <div class="mt-6 space-y-4">
                        <div class="flex items-start gap-3">
                            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-transparent text-[#d87339]">
                                <i class="fa-solid fa-location-dot"></i>
                            </span>
                            <div>
                                <p class="text-sm font-semibold text-white">Location</p>
                                <p class="mt-1 text-sm leading-6 text-white/75">Houston, Texas</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-3">
                            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-transparent text-[#d87339]">
                                <i class="fa-solid fa-phone-volume"></i>
                            </span>
                            <div>
                                <p class="text-sm font-semibold text-white">Phone</p>
                                <p class="mt-1 text-sm leading-6 text-white/75">+1 (000) 000-0000</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-3">
                            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-transparent text-[#d87339]">
                                <i class="fa-solid fa-envelope"></i>
                            </span>
                            <div>
                                <p class="text-sm font-semibold text-white">Email</p>
                                <p class="mt-1 text-sm leading-6 text-white/75">info@houstonacrepair.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                <p class="text-sm text-white/60">
                    © 2025 Houston AC Repair. All Rights Reserved.
                </p>

                <div class="flex justify-center gap-6 sm:justify-end">
                    <a href="#" class="text-sm text-white/60 transition hover:text-[#d87339]">Privacy Policy</a>
                    <a href="#" class="text-sm text-white/60 transition hover:text-[#d87339]">Terms & Conditions</a>
                </div>
            </div>
        </div>
    </div>
</footer>
`;