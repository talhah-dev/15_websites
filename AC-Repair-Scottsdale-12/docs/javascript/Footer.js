const footer = document.getElementById("footer");

footer.innerHTML = `
<footer class="relative overflow-hidden">
    <div class="absolute inset-0">
        <img src="./docs/assets/img11.jpg" alt="Scottsdale AC footer background" class="h-full w-full object-cover">
    </div>
    <div class="absolute inset-0 bg-[#505a7b]/92"></div>

    <div class="relative">
        <div class="mx-auto max-w-7xl px-6 pt-20 lg:px-8 lg:pt-28">
            <div class="grid gap-8 rounded-[2.25rem] border border-white/10 bg-white/10 p-8 text-white shadow-[0_30px_80px_-30px_rgba(80,90,123,0.45)] backdrop-blur-sm lg:grid-cols-[1fr_0.95fr] lg:items-center lg:p-10">
                <div>
                    <p class="text-sm font-semibold uppercase tracking-[0.28em] text-[#cec374]">
                        Need Fast Cooling Support?
                    </p>

                    <h2 class="mt-4 md:text-4xl text-2xl font-extrabold leading-tight">
                        Send your details and let our team help you stay comfortable
                    </h2>

                    <p class="mt-5 max-w-2xl text-base leading-8 text-white/80">
                        Reach out for AC repair, installation, maintenance, emergency support, or AC parts service across Scottsdale and Phoenix.
                    </p>
                </div>

                <form class="grid gap-4">
                    <div class="grid gap-4 sm:grid-cols-2">
                        <input type="text" placeholder="Full name"
                            class="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-[#ab84ce]">
                        <input type="tel" placeholder="Phone number"
                            class="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-[#ab84ce]">
                    </div>

                    <div class="grid gap-4 sm:grid-cols-2">
                        <input type="email" placeholder="Email address"
                            class="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-[#ab84ce]">
                        <select
                            class="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm text-white outline-none transition focus:border-[#ab84ce]">
                            <option class="text-slate-900">Select service</option>
                            <option class="text-slate-900">AC Repair</option>
                            <option class="text-slate-900">AC Installation</option>
                            <option class="text-slate-900">AC Maintenance</option>
                            <option class="text-slate-900">Emergency AC Repair</option>
                            <option class="text-slate-900">AC Parts</option>
                        </select>
                    </div>

                    <button type="submit"
                        class="inline-flex w-full items-center justify-center rounded-full bg-[#ab84ce] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#9d73c4]">
                        Request Service
                    </button>
                </form>
            </div>
        </div>

        <div class="mx-auto max-w-7xl px-6 pb-10 pt-14 lg:px-8 lg:pb-12">
            <div class="grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-[1.15fr_0.8fr_0.9fr_1fr]">
                <div>
                    <a href="index.html" class="inline-flex items-center gap-3">
                        <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.35rem] bg-[#ab84ce] text-white shadow-[0_12px_30px_-14px_rgba(171,132,206,0.9)]">
                            <i class="fa-solid fa-snowflake text-xl"></i>
                        </span>
                        <div>
                            <p class="text-xl font-extrabold leading-tight text-white">AC Repair Scottsdale</p>
                            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#cec374]">Phoenix Cooling Experts</p>
                        </div>
                    </a>

                    <p class="mt-6 max-w-md text-sm leading-7 text-white/75">
                        AC Repair Scottsdale provides dependable cooling services for homes and businesses with a focus on comfort, efficiency, fast response, and long-term performance.
                    </p>

                    <div class="mt-6 flex gap-3">
                        <a href="#"
                            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-transparent text-white transition hover:border-[#ab84ce] hover:text-[#ab84ce]">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#"
                            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-transparent text-white transition hover:border-[#ab84ce] hover:text-[#ab84ce]">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#"
                            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-transparent text-white transition hover:border-[#ab84ce] hover:text-[#ab84ce]">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-extrabold text-white">Quick Links</h3>
                    <ul class="mt-6 space-y-3">
                        <li><a href="index.html" class="text-sm text-white/75 transition hover:text-[#cec374]">Home</a></li>
                        <li><a href="about.html" class="text-sm text-white/75 transition hover:text-[#cec374]">About</a></li>
                        <li><a href="services.html" class="text-sm text-white/75 transition hover:text-[#cec374]">Services</a></li>
                        <li><a href="faq.html" class="text-sm text-white/75 transition hover:text-[#cec374]">FAQ</a></li>
                        <li><a href="contact-us.html" class="text-sm text-white/75 transition hover:text-[#cec374]">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-extrabold text-white">Our Services</h3>
                    <ul class="mt-6 space-y-3">
                        <li><a href="ac-repair.html" class="text-sm text-white/75 transition hover:text-[#cec374]">AC Repair</a></li>
                        <li><a href="ac-installation.html" class="text-sm text-white/75 transition hover:text-[#cec374]">AC Installation</a></li>
                        <li><a href="ac-maintenance.html" class="text-sm text-white/75 transition hover:text-[#cec374]">AC Maintenance</a></li>
                        <li><a href="emergency-ac-repair.html" class="text-sm text-white/75 transition hover:text-[#cec374]">Emergency AC Repair</a></li>
                        <li><a href="ac-parts.html" class="text-sm text-white/75 transition hover:text-[#cec374]">AC Parts</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-extrabold text-white">Contact Info</h3>

                    <div class="mt-6 space-y-4">
                        <div class="flex items-start gap-3">
                            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-transparent text-[#cec374]">
                                <i class="fa-solid fa-location-dot"></i>
                            </span>
                            <div>
                                <p class="text-sm font-semibold text-white">Location</p>
                                <p class="mt-1 text-sm leading-6 text-white/75">Scottsdale, Phoenix</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-3">
                            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-transparent text-[#cec374]">
                                <i class="fa-solid fa-phone-volume"></i>
                            </span>
                            <div>
                                <p class="text-sm font-semibold text-white">Phone</p>
                                <p class="mt-1 text-sm leading-6 text-white/75">+1 (000) 000-0000</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-3">
                            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-transparent text-[#cec374]">
                                <i class="fa-solid fa-envelope"></i>
                            </span>
                            <div>
                                <p class="text-sm font-semibold text-white">Email</p>
                                <p class="mt-1 text-sm leading-6 text-white/75">info@acrepairscottsdale.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                <p class="text-sm text-white/60">
                    © 2025 AC Repair Scottsdale. All Rights Reserved.
                </p>

                <div class="flex justify-center gap-6 sm:justify-end">
                    <a href="#" class="text-sm text-white/60 transition hover:text-[#cec374]">Privacy Policy</a>
                    <a href="#" class="text-sm text-white/60 transition hover:text-[#cec374]">Terms & Conditions</a>
                </div>
            </div>
        </div>
    </div>
</footer>
`;