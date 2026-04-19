const footer = document.getElementById("footer");

footer.innerHTML = `
<footer class="bg-white border-t border-slate-200">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">

            <div>
                <a href="index.html" class="inline-flex items-center gap-3">
                    <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#041e42] text-white shadow-lg">
                        <i class="fa-solid fa-house-chimney text-xl"></i>
                    </span>
                    <div>
                        <p class="text-xl font-extrabold leading-tight text-[#041e42]">Roofers Nashville</p>
                        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb81c]">Tennessee Roofing</p>
                    </div>
                </a>

                <p class="mt-6 max-w-md text-sm leading-7 text-slate-600">
                    Roofers Nashville provides dependable roofing services for residential, commercial,
                    and multi-family properties with a focus on strong workmanship, long-term protection,
                    and reliable service.
                </p>

                <div class="mt-6 flex gap-3">
                    <a href="#" class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-[#041e42] transition hover:border-[#041e42] hover:bg-[#041e42] hover:text-white">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-[#041e42] transition hover:border-[#041e42] hover:bg-[#041e42] hover:text-white">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-[#041e42] transition hover:border-[#041e42] hover:bg-[#041e42] hover:text-white">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

            <div>
                <h3 class="text-lg font-extrabold text-[#041e42]">Quick Links</h3>
                <ul class="mt-6 space-y-3">
                    <li><a href="index.html" class="text-sm text-slate-600 transition hover:text-[#041e42]">Home</a></li>
                    <li><a href="about.html" class="text-sm text-slate-600 transition hover:text-[#041e42]">About</a></li>
                    <li><a href="services.html" class="text-sm text-slate-600 transition hover:text-[#041e42]">Services</a></li>
                    <li><a href="faq.html" class="text-sm text-slate-600 transition hover:text-[#041e42]">FAQ</a></li>
                    <li><a href="contact-us.html" class="text-sm text-slate-600 transition hover:text-[#041e42]">Contact Us</a></li>
                </ul>
            </div>

            <div>
                <h3 class="text-lg font-extrabold text-[#041e42]">Our Services</h3>
                <ul class="mt-6 space-y-3">
                    <li><a href="residential-roofing.html" class="text-sm text-slate-600 transition hover:text-[#041e42]">Residential Roofing</a></li>
                    <li><a href="commercial-roofing.html" class="text-sm text-slate-600 transition hover:text-[#041e42]">Commercial Roofing</a></li>
                    <li><a href="multi-family-roofing.html" class="text-sm text-slate-600 transition hover:text-[#041e42]">Multi-Family Roofing</a></li>
                    <li><a href="roof-repair.html" class="text-sm text-slate-600 transition hover:text-[#041e42]">Roof Repair</a></li>
                    <li><a href="new-roofing.html" class="text-sm text-slate-600 transition hover:text-[#041e42]">New Roofing</a></li>
                </ul>
            </div>

            <div>
                <h3 class="text-lg font-extrabold text-[#041e42]">Contact Info</h3>

                <div class="mt-6 space-y-4">
                    <div class="flex items-start gap-3">
                        <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#041e42] text-white">
                            <i class="fa-solid fa-location-dot"></i>
                        </span>
                        <div>
                            <p class="text-sm font-semibold text-[#041e42]">Location</p>
                            <p class="mt-1 text-sm leading-6 text-slate-600">Nashville, Tennessee</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#041e42] text-white">
                            <i class="fa-solid fa-phone-volume"></i>
                        </span>
                        <div>
                            <p class="text-sm font-semibold text-[#041e42]">Phone</p>
                            <p class="mt-1 text-sm leading-6 text-slate-600">+1 (000) 000-0000</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#041e42] text-white">
                            <i class="fa-solid fa-envelope"></i>
                        </span>
                        <div>
                            <p class="text-sm font-semibold text-[#041e42]">Email</p>
                            <p class="mt-1 text-sm leading-6 text-slate-600">info@roofersnashville.com</p>
                        </div>
                    </div>
                </div>

                <a href="contact-us.html"
                    class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#ffb81c] px-6 py-3 text-sm font-semibold text-[#041e42] transition hover:bg-[#e5a400] sm:w-auto">
                    Get Free Estimate
                </a>
            </div>

        </div>

        <div class="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p class="text-sm text-slate-500">
                © 2025 Roofers Nashville. All Rights Reserved.
            </p>

            <div class="flex justify-center gap-6 sm:justify-end">
                <a href="#" class="text-sm text-slate-500 transition hover:text-[#041e42]">Privacy Policy</a>
                <a href="#" class="text-sm text-slate-500 transition hover:text-[#041e42]">Terms & Conditions</a>
            </div>
        </div>
    </div>
</footer>
`;