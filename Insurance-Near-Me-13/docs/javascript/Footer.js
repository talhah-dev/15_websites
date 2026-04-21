const footer = document.getElementById("footer");

footer.innerHTML = `
<section class="bg-[#022d62] py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div class="">
            <div class="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-2 xl:grid-cols-4">
                <div>
                    <span class="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Insurance Near Me</span>
                    <h2 class="mt-4 text-2xl font-bold leading-tight text-white">
                        Protection built for life, home, health, and business
                    </h2>
                    <p class="mt-4 max-w-xs leading-7 text-white/75">
                        Clear coverage guidance for individuals, families, and businesses looking for dependable support.
                    </p>
                </div>

                <div>
                    <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">Pages</p>
                    <div class="mt-4 space-y-3">
                        <a href="index.html" class="block text-white transition duration-300 hover:text-[#f28a03]">Home</a>
                        <a href="about.html" class="block text-white transition duration-300 hover:text-[#f28a03]">About</a>
                        <a href="services.html" class="block text-white transition duration-300 hover:text-[#f28a03]">Services</a>
                        <a href="faq.html" class="block text-white transition duration-300 hover:text-[#f28a03]">FAQ</a>
                        <a href="contact-us.html" class="block text-white transition duration-300 hover:text-[#f28a03]">Contact Us</a>
                    </div>
                </div>

                <div>
                    <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">Services</p>
                    <div class="mt-4 space-y-3">
                        <a href="health-insurance.html" class="block text-white transition duration-300 hover:text-[#f28a03]">Health Insurance</a>
                        <a href="auto-insurance.html" class="block text-white transition duration-300 hover:text-[#f28a03]">Auto Insurance</a>
                        <a href="homeowners-insurance.html" class="block text-white transition duration-300 hover:text-[#f28a03]">Homeowners Insurance</a>
                        <a href="life-insurance.html" class="block text-white transition duration-300 hover:text-[#f28a03]">Life Insurance</a>
                        <a href="business-insurance.html" class="block text-white transition duration-300 hover:text-[#f28a03]">Business Insurance</a>
                    </div>
                </div>

                <div>
                    <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">Contact</p>
                    <div class="mt-4 space-y-4">
                        <div>
                            <p class="text-sm text-white/55">Call Us</p>
                            <p class="mt-1 text-white">+1 (000) 000-0000</p>
                        </div>
                        <div>
                            <p class="text-sm text-white/55">Location</p>
                            <p class="mt-1 text-white/85">Local Insurance Support Near You</p>
                        </div>
                        <div>
                            <p class="text-sm text-white/55">Office Hours</p>
                            <p class="mt-1 text-white/85">Mon - Sat / 9:00 AM - 6:00 PM</p>
                        </div>
                        <a href="contact-us.html"
                            class="inline-flex rounded-2xl items-center justify-center bg-[#f28a03] px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(242,138,3,0.28)]">
                            Get a Free Quote
                        </a>
                    </div>
                </div>
            </div>

            <div class="mt-10 overflow-hidden rounded-[1.75rem] border border-white/10">
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Insurance Near Me featured coverage section"
                        class="h-[240px] w-full object-cover sm:h-[300px] lg:h-[360px]">
                    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,45,98,0.12),rgba(2,45,98,0.28),rgba(2,45,98,0.72))]"></div>

                    <div class="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                        <div class="max-w-2xl">
                            <span class="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Featured Protection</span>
                            <h3 class="mt-3 text-2xl font-bold text-white sm:text-3xl">Coverage That Fits Real Life</h3>
                            <p class="mt-3 leading-7 text-white/80">
                                Explore insurance solutions designed to help protect your family, property, vehicle, business, and future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
                <p>&copy; 2026 Insurance Near Me. All rights reserved.</p>
                <div class="flex flex-wrap gap-5">
                    <span class="transition duration-300 hover:text-[#f28a03]">Instagram</span>
                    <span class="transition duration-300 hover:text-[#f28a03]">Facebook</span>
                    <span class="transition duration-300 hover:text-[#f28a03]">LinkedIn</span>
                    <span class="transition duration-300 hover:text-[#f28a03]">X</span>
                </div>
            </div>
        </div>
    </div>
</section>
`;
