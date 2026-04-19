const footer = document.getElementById("footer");

footer.innerHTML = `
<footer class="relative text-white">

    <div class="absolute inset-0">
        <img src="./docs/assets/img8.jpg" class="w-full h-full object-cover">
    </div>

    <div class="absolute inset-0 bg-[#003630]/95"></div>

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">

        <div class="grid gap-12 lg:grid-cols-4">

            <div>
                <h3 class="text-2xl font-extrabold">
                    Roofers Oakland
                </h3>
                <p class="mt-4 text-white/80 text-sm leading-6">
                    Professional roofing services across Oakland, California.
                    We deliver durable, high-quality solutions for residential,
                    commercial, and multi-family properties.
                </p>

                <div class="mt-6 flex gap-4 text-lg">
                    <a href="#" class="hover:text-[#f8b900] transition">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" class="hover:text-[#f8b900] transition">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" class="hover:text-[#f8b900] transition">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

            <div>
                <h4 class="text-lg font-bold">Quick Links</h4>
                <ul class="mt-5 space-y-3 text-sm text-white/80">
                    <li><a href="index.html" class="hover:text-[#f8b900] transition">Home</a></li>
                    <li><a href="about.html" class="hover:text-[#f8b900] transition">About</a></li>
                    <li><a href="services.html" class="hover:text-[#f8b900] transition">Services</a></li>
                    <li><a href="faq.html" class="hover:text-[#f8b900] transition">FAQ</a></li>
                    <li><a href="contact-us.html" class="hover:text-[#f8b900] transition">Contact Us</a></li>
                </ul>
            </div>

            <div>
                <h4 class="text-lg font-bold">Our Services</h4>
                <ul class="mt-5 space-y-3 text-sm text-white/80">
                    <li><a href="residential-roofing.html" class="hover:text-[#f8b900] transition">Residential Roofing</a></li>
                    <li><a href="commercial-roofing.html" class="hover:text-[#f8b900] transition">Commercial Roofing</a></li>
                    <li><a href="multi-family-roofing.html" class="hover:text-[#f8b900] transition">Multi-Family Roofing</a></li>
                    <li><a href="roof-repair.html" class="hover:text-[#f8b900] transition">Roof Repair</a></li>
                    <li><a href="new-roofing.html" class="hover:text-[#f8b900] transition">New Roofing</a></li>
                </ul>
            </div>

            <div>
                <h4 class="text-lg font-bold">Contact Info</h4>

                <div class="mt-5 space-y-4 text-sm text-white/80">

                    <div class="flex items-start gap-3">
                        <i class="fa-solid fa-location-dot text-[#f8b900] mt-1"></i>
                        <p>Oakland, California</p>
                    </div>

                    <div class="flex items-center gap-3">
                        <i class="fa-solid fa-phone text-[#f8b900]"></i>
                        <p>+1 (000) 000-0000</p>
                    </div>

                    <div class="flex items-center gap-3">
                        <i class="fa-solid fa-envelope text-[#f8b900]"></i>
                        <p>info@roofersoackland.com</p>
                    </div>

                </div>

                <a href="contact-us.html"
                   class="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f8b900] px-5 py-3 text-sm font-semibold text-black hover:bg-[#e0a800] transition">
                    Get Free Estimate
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>

        </div>

        <div class="mt-16 border-t border-white/20 pt-6 text-center text-sm text-white/70">
            © 2025 Roofers Oakland. All Rights Reserved.
        </div>

    </div>
</footer>
`;