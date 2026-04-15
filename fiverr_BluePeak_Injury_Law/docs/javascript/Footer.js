const footer = document.getElementById("footer");
footer.innerHTML = `
<footer class="relative bg-white">
  <div class="absolute inset-0 pointer-events-none opacity-[0.035]"
    style="background-image: radial-gradient(#0b1220 1px, transparent 1px); background-size: 18px 18px;"></div>

  <div class="relative border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-8">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-12">
        <div class="lg:col-span-4" data-aos="fade-up" data-aos-duration="800">
          <a href="./index.html" class="inline-flex items-center gap-3">
            <span class="shrink-0 h-10 w-10 rounded-2xl inline-flex items-center justify-center text-white shadow-sm"
              style="background:#004A99;">
              <i class="fa-solid fa-scale-balanced"></i>
            </span>
            <div>
              <p class="text-lg font-extrabold leading-tight text-slate-900">Injury Law</p>
              <p class="text-xs font-semibold text-slate-500">Personal Injury Representation</p>
            </div>
          </a>

          <p class="mt-4 text-sm sm:text-base text-slate-600 max-w-md">
            A modern, organized approach to personal injury claims with clear communication from start to finish.
          </p>

          <div class="mt-5 flex flex-wrap gap-2">
            <span class="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700">
              Free consultation
            </span>
            <span class="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700">
              Fast response
            </span>
          </div>
        </div>

        <div class="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800">
          <div>
            <p class="text-sm font-extrabold tracking-wide text-slate-900">Quick Links</p>
            <ul class="mt-4 space-y-3 text-sm text-slate-600">
              <li><a class="hover:text-slate-900 transition" href="./index.html">Home</a></li>
              <li><a class="hover:text-slate-900 transition" href="./about.html">About</a></li>
              <li><a class="hover:text-slate-900 transition" href="./auto-accident.html">Auto Accident</a></li>
              <li><a class="hover:text-slate-900 transition" href="./faq.html">FAQ</a></li>
              <li><a class="hover:text-slate-900 transition" href="./contact-us.html">Contact</a></li>
            </ul>
          </div>

          <div>
            <p class="text-sm font-extrabold tracking-wide text-slate-900">Practice Areas</p>
            <ul class="mt-4 space-y-3 text-sm text-slate-600">
              <li><a class="hover:text-slate-900 transition" href="./auto-accident.html">Auto Accidents</a></li>
              <li><a class="hover:text-slate-900 transition" href="#">Motorcycle Accidents</a></li>
              <li><a class="hover:text-slate-900 transition" href="#">Slip &amp; Fall Injuries</a></li>
              <li><a class="hover:text-slate-900 transition" href="#">Dog Bites</a></li>
              <li><a class="hover:text-slate-900 transition" href="#">Other Injury Claims</a></li>
            </ul>
          </div>

          <div class="sm:col-span-2 lg:col-span-1">
            <p class="text-sm font-extrabold tracking-wide text-slate-900">Contact</p>

            <div class="mt-4 space-y-3 text-sm text-slate-600">
              <div class="flex items-start gap-3">
                <span class="shrink-0 h-9 w-9 inline-flex items-center justify-center rounded-xl border border-slate-200"
                  style="color:#004A99;">
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                <p class="leading-relaxed">
                  6800 Washington Avenue<br />
                  Racine, WI 53406
                </p>
              </div>

              <a href="tel:2628868240" class="flex items-center gap-3 hover:text-slate-900 transition">
                <span class="shrink-0 h-9 w-9 inline-flex items-center justify-center rounded-xl border border-slate-200"
                  style="color:#004A99;">
                  <i class="fa-solid fa-phone"></i>
                </span>
                <span>262-886-8240</span>
              </a>

              <a href="mailto:info@bluepeakinjurylaw.com" class="flex items-center gap-3 hover:text-slate-900 transition">
                <span class="shrink-0 h-9 w-9 inline-flex items-center justify-center rounded-xl border border-slate-200"
                  style="color:#004A99;">
                  <i class="fa-solid fa-envelope"></i>
                </span>
                <span>info@bluepeakinjurylaw.com</span>
              </a>
            </div>

            <div class="mt-5 flex items-center gap-2">
              <a href="#" class="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 hover:text-slate-900 hover:bg-white transition"
                aria-label="Facebook">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" class="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 hover:text-slate-900 hover:bg-white transition"
                aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#" class="h-10 w-10 inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 hover:text-slate-900 hover:bg-white transition"
                aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 pt-8 border-t border-slate-200">
        <div class=" flex items-center justify-center text-center">
          <p class="text-xs text-slate-500">
            © <span id="year"></span> BluePeak Injury Law. All rights reserved.
          </p>
        </div>
      </div>

    </div>
  </div>
</footer>


`;
