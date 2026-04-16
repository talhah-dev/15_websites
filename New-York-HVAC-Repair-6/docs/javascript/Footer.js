const footer = document.getElementById("footer");

footer.innerHTML = `
  <footer class="relative overflow-hidden bg-white text-[#051821] border-t border-[#C4CDD3]/40">
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#6ACCB1]/10 blur-3xl"></div>
      <div class="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#C4CDD3]/25 blur-3xl"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="pt-20 pb-10">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-5">
            <a href="index.html" class="inline-flex items-center gap-4">
              <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#051821] text-white shadow-lg">
                <i class="fa-solid fa-fan text-xl"></i>
              </span>
              <div>
                <p class="text-2xl font-extrabold leading-tight text-[#051821]">New York HVAC Repair</p>
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[#6ACCB1]">New York Comfort Team</p>
              </div>
            </a>

            <p class="mt-6 max-w-md text-sm leading-7 text-slate-600">
              Trusted heating and cooling support for homes and businesses across New York. We provide HVAC repair, installation, maintenance, emergency service, and parts support with a clean and professional service experience.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <span class="inline-flex items-center rounded-full border border-[#C4CDD3]/50 bg-[#F8FBFC] px-4 py-2 text-xs font-semibold text-[#051821]">Fast Scheduling</span>
              <span class="inline-flex items-center rounded-full border border-[#C4CDD3]/50 bg-[#F8FBFC] px-4 py-2 text-xs font-semibold text-[#051821]">Home & Business</span>
              <span class="inline-flex items-center rounded-full border border-[#C4CDD3]/50 bg-[#F8FBFC] px-4 py-2 text-xs font-semibold text-[#051821]">24/7 Emergency Support</span>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#6ACCB1]">Quick Links</p>
                <ul class="mt-6 space-y-4">
                  <li><a href="index.html" class="text-sm font-medium text-slate-600 transition hover:text-[#051821]">Home</a></li>
                  <li><a href="about.html" class="text-sm font-medium text-slate-600 transition hover:text-[#051821]">About</a></li>
                  <li><a href="services.html" class="text-sm font-medium text-slate-600 transition hover:text-[#051821]">Services</a></li>
                  <li><a href="faq.html" class="text-sm font-medium text-slate-600 transition hover:text-[#051821]">FAQ</a></li>
                </ul>
              </div>

              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#6ACCB1]">Sub Services</p>
                <ul class="mt-6 space-y-4">
                  <li><a href="hvac-repair.html" class="text-sm font-medium text-slate-600 transition hover:text-[#051821]">HVAC Repair</a></li>
                  <li><a href="hvac-installation.html" class="text-sm font-medium text-slate-600 transition hover:text-[#051821]">HVAC Installation</a></li>
                  <li><a href="hvac-maintenance.html" class="text-sm font-medium text-slate-600 transition hover:text-[#051821]">HVAC Maintenance</a></li>
                  <li><a href="emergency-hvac-repair.html" class="text-sm font-medium text-slate-600 transition hover:text-[#051821]">Emergency HVAC Repair</a></li>
                  <li><a href="hvac-parts.html" class="text-sm font-medium text-slate-600 transition hover:text-[#051821]">HVAC Parts</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-14">
          <div class="rounded-[1.75rem] border border-[#C4CDD3]/50 bg-white/80 px-6 py-6 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(5,24,33,0.12)] lg:px-8">
            <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span class="inline-flex items-center rounded-full bg-[#6ACCB1]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#051821]">
                  Need Fast HVAC Help?
                </span>
                <h3 class="mt-4 text-2xl lg:text-3xl font-extrabold leading-tight text-[#051821]">
                  Book dependable heating and cooling service across New York
                </h3>
                <p class="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  Get quick support for repair, installation, maintenance, emergency service, and parts assistance with a smoother service experience.
                </p>
              </div>

              <div class="shrink-0">
                <a href="contact-us.html"
                  class="inline-flex items-center justify-center rounded-full bg-[#051821] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0c2a36]">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 border-t border-[#C4CDD3]/40 pt-6">
          <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p class="text-sm text-slate-500">© <span id="year"></span> New York HVAC Repair. All rights reserved.</p>
            <div class="flex flex-wrap items-center gap-5 text-sm text-slate-500">
              <a href="about.html" class="transition hover:text-[#051821]">About</a>
              <a href="services.html" class="transition hover:text-[#051821]">Services</a>
              <a href="faq.html" class="transition hover:text-[#051821]">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
`;

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();