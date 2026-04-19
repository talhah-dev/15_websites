const footer = document.getElementById("footer");

footer.innerHTML = `
<footer
  class="relative bg-cover bg-center bg-no-repeat pt-20 pb-10"
  style="background-image: url('./docs/assets/img5.jpg');"
>
  <div class="absolute inset-0 bg-[#022d62]/95"></div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    <div class="grid gap-12 lg:grid-cols-12">
      
      <div class="lg:col-span-4">
        <div class="flex items-center gap-3">
          <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f28a03] text-white">
            <i class="fa-solid fa-house-chimney"></i>
          </span>
          <div>
            <h3 class="text-xl font-extrabold text-white">Roofers Boca Raton</h3>
            <p class="text-xs uppercase tracking-[0.2em] text-[#f28a03]">
              Roofing Experts
            </p>
          </div>
        </div>

        <p class="mt-6 max-w-md text-base leading-7 text-white/80">
          Providing reliable roofing solutions for residential, commercial, and multi-family properties.
          We focus on quality craftsmanship, durability, and customer satisfaction.
        </p>

        <div class="mt-6 flex items-center gap-3">
          <a href="#" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#f28a03]">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#f28a03]">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#f28a03]">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#f28a03]">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div class="lg:col-span-2">
        <h4 class="text-lg font-bold text-white">Quick Links</h4>
        <ul class="mt-5 space-y-3">
          <li><a href="index.html" class="text-white/80 transition hover:text-[#f28a03]">Home</a></li>
          <li><a href="about.html" class="text-white/80 transition hover:text-[#f28a03]">About</a></li>
          <li><a href="services.html" class="text-white/80 transition hover:text-[#f28a03]">Services</a></li>
          <li><a href="faq.html" class="text-white/80 transition hover:text-[#f28a03]">FAQ</a></li>
          <li><a href="contact-us.html" class="text-white/80 transition hover:text-[#f28a03]">Contact Us</a></li>
        </ul>
      </div>

      <div class="lg:col-span-3">
        <h4 class="text-lg font-bold text-white">Services</h4>
        <ul class="mt-5 space-y-3">
          <li><a href="residential-roofing.html" class="text-white/80 transition hover:text-[#f28a03]">Residential Roofing</a></li>
          <li><a href="commercial-roofing.html" class="text-white/80 transition hover:text-[#f28a03]">Commercial Roofing</a></li>
          <li><a href="multi-family-roofing.html" class="text-white/80 transition hover:text-[#f28a03]">Multi-Family Roofing</a></li>
          <li><a href="roof-repair.html" class="text-white/80 transition hover:text-[#f28a03]">Roof Repair</a></li>
          <li><a href="new-roofing.html" class="text-white/80 transition hover:text-[#f28a03]">New Roofing</a></li>
        </ul>
      </div>

      <div class="lg:col-span-3">
        <h4 class="text-lg font-bold text-white">Contact Info</h4>
        <ul class="mt-5 space-y-4">
          <li class="flex items-start gap-3">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f28a03] text-white">
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <p class="text-white/80 text-sm leading-6">
              Boca Raton, Florida
            </p>
          </li>

          <li class="flex items-start gap-3">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f28a03] text-white">
              <i class="fa-solid fa-phone"></i>
            </span>
            <p class="text-white/80 text-sm leading-6">
              +1 (000) 000-0000
            </p>
          </li>

          <li class="flex items-start gap-3">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f28a03] text-white">
              <i class="fa-solid fa-envelope"></i>
            </span>
            <p class="text-white/80 text-sm leading-6">
              info@roofersbocaraton.com
            </p>
          </li>
        </ul>
      </div>

    </div>

    <div class="mt-16 border-t border-white/10 pt-6 text-center">
      <p class="text-sm text-white/60">
        © 2026 Roofers Boca Raton. All Rights Reserved.
      </p>
    </div>

  </div>
</footer>
`;