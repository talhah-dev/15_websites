const footer = document.getElementById("footer");

footer.innerHTML = `
<footer class="pt-20 sm:pt-24">
    <div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div class="border-t border-[#003630]/10 pt-10">
            <div class="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr]">
                <div>
                    <a href="index.html" class="flex items-center gap-3">
                        <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f8b900] text-[#003630]">
                            <i class="fa-solid fa-screwdriver-wrench text-base"></i>
                        </span>
                        <div>
                            <p class="text-2xl font-bold text-[#003630]">Appliance Repair</p>
                            <p class="text-sm text-slate-500">Fast, dependable appliance repair for busy homes</p>
                        </div>
                    </a>

                    <p class="mt-5 max-w-sm leading-7 text-slate-600">
                        We provide trusted repair services for washing machines, dryers, refrigerators,
                        ovens, and dishwashers with weekend-friendly support and a smooth customer experience.
                    </p>

                    <div class="mt-6 flex items-center gap-3">
                        <a href="index.html"
                            class="flex h-10 w-10 items-center justify-center rounded-full border border-[#003630]/10 text-[#003630] transition duration-300 hover:bg-[#003630] hover:text-white">
                            <i class="fa-solid fa-house text-sm"></i>
                        </a>
                        <a href="services.html"
                            class="flex h-10 w-10 items-center justify-center rounded-full border border-[#003630]/10 text-[#003630] transition duration-300 hover:bg-[#003630] hover:text-white">
                            <i class="fa-solid fa-screwdriver-wrench text-sm"></i>
                        </a>
                        <a href="faq.html"
                            class="flex h-10 w-10 items-center justify-center rounded-full border border-[#003630]/10 text-[#003630] transition duration-300 hover:bg-[#003630] hover:text-white">
                            <i class="fa-solid fa-circle-question text-sm"></i>
                        </a>
                        <a href="contact-us.html"
                            class="flex h-10 w-10 items-center justify-center rounded-full border border-[#003630]/10 text-[#003630] transition duration-300 hover:bg-[#003630] hover:text-white">
                            <i class="fa-solid fa-envelope text-sm"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 class="text-sm font-bold uppercase tracking-[0.2em] text-[#003630]">Pages</h3>
                    <ul class="mt-5 space-y-3">
                        <li><a href="index.html" class="text-slate-600 transition duration-300 hover:text-[#f8b900]">Home</a></li>
                        <li><a href="about.html" class="text-slate-600 transition duration-300 hover:text-[#f8b900]">About</a></li>
                        <li><a href="services.html" class="text-slate-600 transition duration-300 hover:text-[#f8b900]">Services</a></li>
                        <li><a href="faq.html" class="text-slate-600 transition duration-300 hover:text-[#f8b900]">FAQ</a></li>
                        <li><a href="contact-us.html" class="text-slate-600 transition duration-300 hover:text-[#f8b900]">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-sm font-bold uppercase tracking-[0.2em] text-[#003630]">Services</h3>
                    <ul class="mt-5 space-y-3">
                        <li><a href="washing-machine-repair.html" class="text-slate-600 transition duration-300 hover:text-[#f8b900]">Washing Machine Repair</a></li>
                        <li><a href="dryer-repair.html" class="text-slate-600 transition duration-300 hover:text-[#f8b900]">Dryer Repair</a></li>
                        <li><a href="refrigerator-repair.html" class="text-slate-600 transition duration-300 hover:text-[#f8b900]">Refrigerator Repair</a></li>
                        <li><a href="oven-repair.html" class="text-slate-600 transition duration-300 hover:text-[#f8b900]">Oven Repair</a></li>
                        <li><a href="dishwasher-repair.html" class="text-slate-600 transition duration-300 hover:text-[#f8b900]">Dishwasher Repair</a></li>
                    </ul>
                </div>

                <div>
                    <div class="rounded-[1.75rem] bg-[#003630] p-6 text-white">
                        <h3 class="text-xl font-bold">Need Appliance Repair?</h3>
                        <p class="mt-3 leading-7 text-white/75">
                            Contact our team for fast weekend-friendly support and dependable appliance service.
                        </p>

                        <a href="contact-us.html"
                            class="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#f8b900] px-6 py-3 font-semibold text-[#003630] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(248,185,0,0.28)]">
                            Book Service
                        </a>
                    </div>
                </div>
            </div>

            <div class="mt-10 flex flex-col gap-4 border-t border-[#003630]/10 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <p>© 2025 Weekend Appliance Repair. All rights reserved.</p>
                <div class="flex flex-wrap items-center gap-5">
                    <a href="about.html" class="transition duration-300 hover:text-[#f8b900]">About</a>
                    <a href="services.html" class="transition duration-300 hover:text-[#f8b900]">Services</a>
                    <a href="faq.html" class="transition duration-300 hover:text-[#f8b900]">FAQ</a>
                    <a href="contact-us.html" class="transition duration-300 hover:text-[#f8b900]">Contact</a>
                </div>
            </div>
        </div>
    </div>
</footer>
`;