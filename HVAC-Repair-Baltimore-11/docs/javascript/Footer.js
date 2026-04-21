const footer = document.getElementById("footer");

footer.innerHTML = `
<footer class="relative overflow-hidden">
  <img src="./docs/assets/img4.jpg" alt="HVAC background" class="absolute inset-0 w-full h-full object-cover">
  <div class="absolute inset-0 bg-[#523126]/90"></div>

  <div class="relative z-10">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8">
      <div class="grid lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
        <div class="lg:col-span-4">
          <a href="index.html" class="inline-block">
            <h2 class="text-3xl font-bold text-white">HVAC Repair Baltimore</h2>
          </a>
          <p class="mt-5 text-white/75 leading-7 max-w-md">
            We provide reliable HVAC repair, installation, maintenance, and emergency services across Baltimore, Maryland with a strong focus on comfort, quality, and fast response.
          </p>

          <div class="mt-6 flex items-center gap-3">
            <a href="#" class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition duration-300 hover:bg-[#99cc01] hover:text-[#523126]">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition duration-300 hover:bg-[#99cc01] hover:text-[#523126]">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition duration-300 hover:bg-[#99cc01] hover:text-[#523126]">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition duration-300 hover:bg-[#99cc01] hover:text-[#523126]">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div class="lg:col-span-2">
          <h3 class="text-xl font-semibold text-white mb-5">Quick Links</h3>
          <ul class="space-y-3">
            <li><a href="index.html" class="text-white/75 transition duration-300 hover:text-[#99cc01]">Home</a></li>
            <li><a href="about.html" class="text-white/75 transition duration-300 hover:text-[#99cc01]">About</a></li>
            <li><a href="services.html" class="text-white/75 transition duration-300 hover:text-[#99cc01]">Services</a></li>
            <li><a href="faq.html" class="text-white/75 transition duration-300 hover:text-[#99cc01]">FAQ</a></li>
            <li><a href="contact-us.html" class="text-white/75 transition duration-300 hover:text-[#99cc01]">Contact Us</a></li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <h3 class="text-xl font-semibold text-white mb-5">Our Services</h3>
          <ul class="space-y-3">
            <li><a href="hvac-repair.html" class="text-white/75 transition duration-300 hover:text-[#99cc01]">HVAC Repair</a></li>
            <li><a href="hvac-installation.html" class="text-white/75 transition duration-300 hover:text-[#99cc01]">HVAC Installation</a></li>
            <li><a href="hvac-maintenance.html" class="text-white/75 transition duration-300 hover:text-[#99cc01]">HVAC Maintenance</a></li>
            <li><a href="emergency-hvac-repair.html" class="text-white/75 transition duration-300 hover:text-[#99cc01]">Emergency HVAC Repair</a></li>
            <li><a href="hvac-parts.html" class="text-white/75 transition duration-300 hover:text-[#99cc01]">HVAC Parts</a></li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <h3 class="text-xl font-semibold text-white mb-5">Contact Info</h3>

          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#99cc01]">
                <i class="fa-solid fa-phone-volume"></i>
              </span>
              <div>
                <p class="text-sm font-medium text-white">Phone</p>
                <a href="tel:+14435550199" class="text-white/75 transition duration-300 hover:text-[#99cc01]">(443) 555-0199</a>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#99cc01]">
                <i class="fa-solid fa-envelope"></i>
              </span>
              <div>
                <p class="text-sm font-medium text-white">Email</p>
                <a href="mailto:info@hvacrepairbaltimore.com" class="text-white/75 transition duration-300 hover:text-[#99cc01]">info@hvacrepairbaltimore.com</a>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#99cc01]">
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <div>
                <p class="text-sm font-medium text-white">Location</p>
                <p class="text-white/75">Baltimore, Maryland</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
        <p class="text-white/70 text-sm text-center md:text-left">
          © 2026 HVAC Repair Baltimore. All Rights Reserved.
        </p>

        <div class="flex items-center gap-5 text-sm">
          <a href="#" class="text-white/70 transition duration-300 hover:text-[#99cc01]">Privacy Policy</a>
          <a href="#" class="text-white/70 transition duration-300 hover:text-[#99cc01]">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </div>
</footer>
`;
