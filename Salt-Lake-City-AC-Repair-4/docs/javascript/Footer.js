const footer = document.getElementById("footer");

footer.innerHTML = `
  <footer class="bg-[#001D3E] text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <img src="./docs/assets/img1.jpg" class="w-full h-full object-cover" alt="footer background">
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div class="flex items-center gap-3">
            <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#001D3E]">
              <i class="fa-solid fa-fan"></i>
            </span>
            <div>
              <p class="text-lg font-extrabold">Salt Lake City AC Repair</p>
              <p class="text-xs text-gray-300">Utah Cooling Company</p>
            </div>
          </div>
          <p class="mt-5 text-sm text-gray-300 leading-6">
            Providing fast, reliable AC repair, installation, and maintenance services across Salt Lake City, Utah.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm text-gray-300">
            <li><a href="index.html" class="hover:text-[#FFA101]">Home</a></li>
            <li><a href="about.html" class="hover:text-[#FFA101]">About</a></li>
            <li><a href="services.html" class="hover:text-[#FFA101]">Services</a></li>
            <li><a href="faq.html" class="hover:text-[#FFA101]">FAQ</a></li>
            <li><a href="contact-us.html" class="hover:text-[#FFA101]">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold mb-4">Services</h3>
          <ul class="space-y-2 text-sm text-gray-300">
            <li><a href="ac-repair.html" class="hover:text-[#FFA101]">AC Repair</a></li>
            <li><a href="ac-installation.html" class="hover:text-[#FFA101]">AC Installation</a></li>
            <li><a href="ac-maintenance.html" class="hover:text-[#FFA101]">AC Maintenance</a></li>
            <li><a href="emergency-ac-repair.html" class="hover:text-[#FFA101]">Emergency AC Repair</a></li>
            <li><a href="ac-parts.html" class="hover:text-[#FFA101]">AC Parts</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold mb-4">Contact</h3>
          <ul class="space-y-3 text-sm text-gray-300">
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-location-dot text-[#FFA101]"></i>
              Salt Lake City, Utah
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-phone text-[#FFA101]"></i>
              <a href="tel:+10000000000" class="hover:text-[#FFA101]">+1 (000) 000-0000</a>
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-envelope text-[#FFA101]"></i>
              <a href="mailto:info@saltlakecityacrepair.com" class="hover:text-[#FFA101]">info@saltlakecityacrepair.com</a>
            </li>
          </ul>

          <div class="flex gap-4 mt-5">
            <a href="contact-us.html" aria-label="Contact us" class="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFA101] transition">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="tel:+10000000000" aria-label="Call us" class="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFA101] transition">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="mailto:info@saltlakecityacrepair.com" aria-label="Email us" class="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFA101] transition">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
        &copy; <span id="year"></span> Salt Lake City AC Repair. All rights reserved.
      </div>
    </div>
  </footer>
`;

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
