const footer = document.getElementById("footer");
footer.innerHTML = `
<footer class="relative overflow-hidden bg-[#103a2f] text-white">
  <div class="absolute inset-0 opacity-[0.08]" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 18px 18px;"></div>
  <div class="absolute -right-20 top-0 h-72 w-72 rounded-full blur-3xl opacity-20" style="background:#FEB925;"></div>

  <div class="relative border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-8">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-12">
        <div class="lg:col-span-4" data-aos="fade-up" data-aos-duration="800">
          <a href="./index.html" class="inline-flex items-center gap-3">
            <span class="shrink-0 h-10 w-10 rounded-2xl inline-flex items-center justify-center text-[#124433] shadow-sm" style="background:#FEB925;">
              <i class="fa-solid fa-house-chimney"></i>
            </span>
            <div>
              <p class="text-lg font-extrabold leading-tight text-white">Roofers Jersey City</p>
              <p class="text-xs font-semibold text-white/65">New Jersey Roofing Company</p>
            </div>
          </a>

          <p class="mt-4 text-sm sm:text-base text-white/78 max-w-md">
            Roofing for homes, businesses, and multi-family properties across Jersey City with thoughtful planning, durable workmanship, and cleaner jobsite care.
          </p>

          <div class="mt-5 flex flex-wrap gap-2">
            <span class="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/85">Jersey City service area</span>
            <span class="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/85">Estimates available</span>
          </div>
        </div>

        <div class="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800">
          <div>
            <p class="text-sm font-extrabold tracking-wide text-white">Quick Links</p>
            <ul class="mt-4 space-y-3 text-sm text-white/72">
              <li><a class="hover:text-[#FEB925] transition" href="./index.html">Home</a></li>
              <li><a class="hover:text-[#FEB925] transition" href="./about.html">About</a></li>
              <li><a class="hover:text-[#FEB925] transition" href="./services.html">Services</a></li>
              <li><a class="hover:text-[#FEB925] transition" href="./faq.html">FAQ</a></li>
              <li><a class="hover:text-[#FEB925] transition" href="./contact-us.html">Contact</a></li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-extrabold tracking-wide text-white">Roofing Services</p>
            <ul class="mt-4 space-y-3 text-sm text-white/72">
              <li><a class="hover:text-[#FEB925] transition" href="./residential-roofing.html">Residential Roofing</a></li>
              <li><a class="hover:text-[#FEB925] transition" href="./commercial-roofing.html">Commercial Roofing</a></li>
              <li><a class="hover:text-[#FEB925] transition" href="./multi-family-roofing.html">Multi-Family Roofing</a></li>
              <li><a class="hover:text-[#FEB925] transition" href="./roof-repair.html">Roof Repair</a></li>
              <li><a class="hover:text-[#FEB925] transition" href="./new-roofing.html">New Roofing</a></li>
            </ul>
          </div>

          <div class="sm:col-span-2 lg:col-span-1">
            <p class="text-sm font-extrabold tracking-wide text-white">Contact</p>
            <div class="mt-4 space-y-3 text-sm text-white/72">
              <div class="flex items-start gap-3">
                <span class="shrink-0 h-9 w-9 inline-flex items-center justify-center rounded-xl border border-white/15 text-[#FEB925]">
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                <p class="leading-relaxed">Jersey City, New Jersey<br />Hudson County roofing service area</p>
              </div>

              <a href="tel:2015550188" class="flex items-center gap-3 hover:text-white transition">
                <span class="shrink-0 h-9 w-9 inline-flex items-center justify-center rounded-xl border border-white/15 text-[#FEB925]">
                  <i class="fa-solid fa-phone"></i>
                </span>
                <span>(201) 555-0188</span>
              </a>

              <a href="mailto:info@roofersjerseycity.com" class="flex items-center gap-3 hover:text-white transition">
                <span class="shrink-0 h-9 w-9 inline-flex items-center justify-center rounded-xl border border-white/15 text-[#FEB925]">
                  <i class="fa-solid fa-envelope"></i>
                </span>
                <span>info@roofersjerseycity.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 pt-8 border-t border-white/10">
        <div class="flex items-center justify-center text-center">
          <p class="text-xs text-white/60">&copy; <span id="year"></span> Roofers Jersey City. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
`;

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
