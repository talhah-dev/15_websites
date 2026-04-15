const footer = document.getElementById("footer");
footer.innerHTML = `
<footer class="relative overflow-hidden bg-[#081838] text-white">
  <div class="absolute inset-0 opacity-[0.08]" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 18px 18px;"></div>
  <div class="absolute -left-20 top-0 h-72 w-72 rounded-full blur-3xl opacity-20" style="background:#04B2AA;"></div>
  <div class="absolute right-0 bottom-0 h-56 w-56 rounded-full blur-3xl opacity-20" style="background:#E7861C;"></div>

  <div class="relative border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-8">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-12">
        <div class="lg:col-span-4">
          <a href="./index.html" class="inline-flex items-center gap-3">
            <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-[#081838] shadow-sm" style="background:#04B2AA;">
              <i class="fa-solid fa-house-chimney-window"></i>
            </span>
            <div>
              <p class="text-lg font-extrabold leading-tight text-white">Roofers Newark</p>
              <p class="text-xs font-semibold text-white/65">New Jersey Roofing Company</p>
            </div>
          </a>

          <p class="mt-4 max-w-md text-sm sm:text-base text-white/78">
            Roofing for homes, commercial properties, and multi-family buildings across Newark with focused planning, dependable execution, and responsive service.
          </p>

          <div class="mt-5 flex flex-wrap gap-2">
            <span class="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/85">Newark service area</span>
            <span class="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/85">Repair and replacement</span>
          </div>
        </div>

        <div class="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <p class="text-sm font-extrabold tracking-wide text-white">Quick Links</p>
            <ul class="mt-4 space-y-3 text-sm text-white/72">
              <li><a class="hover:text-[#04B2AA] transition" href="./index.html">Home</a></li>
              <li><a class="hover:text-[#04B2AA] transition" href="./about.html">About</a></li>
              <li><a class="hover:text-[#04B2AA] transition" href="./services.html">Services</a></li>
              <li><a class="hover:text-[#04B2AA] transition" href="./faq.html">FAQ</a></li>
              <li><a class="hover:text-[#04B2AA] transition" href="./contact-us.html">Contact</a></li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-extrabold tracking-wide text-white">Roofing Services</p>
            <ul class="mt-4 space-y-3 text-sm text-white/72">
              <li><a class="hover:text-[#04B2AA] transition" href="./residential-roofing.html">Residential Roofing</a></li>
              <li><a class="hover:text-[#04B2AA] transition" href="./commercial-roofing.html">Commercial Roofing</a></li>
              <li><a class="hover:text-[#04B2AA] transition" href="./multi-family-roofing.html">Multi-Family Roofing</a></li>
              <li><a class="hover:text-[#04B2AA] transition" href="./roof-repair.html">Roof Repair</a></li>
              <li><a class="hover:text-[#04B2AA] transition" href="./new-roofing.html">New Roofing</a></li>
            </ul>
          </div>

          <div class="sm:col-span-2 lg:col-span-1">
            <p class="text-sm font-extrabold tracking-wide text-white">Contact</p>
            <div class="mt-4 space-y-3 text-sm text-white/72">
              <div class="flex items-start gap-3">
                <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 text-[#04B2AA]">
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                <p class="leading-relaxed">Newark, New Jersey<br />Essex County roofing service area</p>
              </div>

              <a href="tel:9735550188" class="flex items-center gap-3 hover:text-white transition">
                <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 text-[#04B2AA]">
                  <i class="fa-solid fa-phone"></i>
                </span>
                <span>(973) 555-0188</span>
              </a>

              <a href="mailto:info@roofersnewark.com" class="flex items-center gap-3 hover:text-white transition">
                <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 text-[#04B2AA]">
                  <i class="fa-solid fa-envelope"></i>
                </span>
                <span>info@roofersnewark.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 pt-8 border-t border-white/10">
        <div class="flex items-center justify-center text-center">
          <p class="text-xs text-white/60">&copy; <span id="year"></span> Roofers Newark. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
`;

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
