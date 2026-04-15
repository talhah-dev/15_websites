const footer = document.getElementById("footer");

footer.innerHTML = `
  <footer class="relative overflow-hidden bg-[#003263] text-white">
    <div class="absolute inset-0">
      <img src="./docs/assets/footer-bg.jpg" alt="Los Angeles HVAC Repair footer background" class="h-full w-full object-cover" />
      <div class="absolute inset-0 bg-[#003263]/90"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-[#003263]/70 to-[#003263]/85"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="pt-20 pb-12">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div class="lg:col-span-5">
            <div class="max-w-xl rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-md">
              <a href="index.html" class="flex items-center gap-4">
                <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8F0028] text-white shadow-lg">
                  <i class="fa-solid fa-fan text-xl"></i>
                </span>
                <div>
                  <p class="text-2xl font-extrabold leading-tight text-white">Los Angeles HVAC Repair</p>
                  <p class="text-xs font-semibold uppercase tracking-[0.25em] text-[#C4CDD3]">California HVAC Experts</p>
                </div>
              </a>

              <p class="mt-6 text-base leading-8 text-[#C4CDD3]">
                Trusted heating and cooling support for homes and businesses across Los Angeles, California. We provide HVAC repair, installation, maintenance, emergency service, and parts support with a premium service experience.
              </p>

              <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a href="tel:+10000000000" class="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#003263]">
                  <i class="fa-solid fa-phone-volume mr-2"></i>
                  Call Now
                </a>
                <a href="contact-us.html" class="inline-flex items-center justify-center rounded-2xl bg-[#8F0028] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#740021]">
                  Book Service
                </a>
              </div>

              <div class="mt-8 flex flex-wrap gap-3">
                <a href="#" class="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:bg-[#8F0028] hover:border-[#8F0028]">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" class="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:bg-[#8F0028] hover:border-[#8F0028]">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#" class="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:bg-[#8F0028] hover:border-[#8F0028]">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#" class="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:bg-[#8F0028] hover:border-[#8F0028]">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 class="text-lg font-bold text-white">Quick Links</h3>
                <ul class="mt-5 space-y-3">
                  <li><a href="index.html" class="text-sm text-[#C4CDD3] transition hover:text-white">Home</a></li>
                  <li><a href="about.html" class="text-sm text-[#C4CDD3] transition hover:text-white">About</a></li>
                  <li><a href="services.html" class="text-sm text-[#C4CDD3] transition hover:text-white">Services</a></li>
                  <li><a href="faq.html" class="text-sm text-[#C4CDD3] transition hover:text-white">FAQ</a></li>
                  <li><a href="contact-us.html" class="text-sm text-[#C4CDD3] transition hover:text-white">Contact Us</a></li>
                </ul>
              </div>

              <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 class="text-lg font-bold text-white">Our Services</h3>
                <ul class="mt-5 space-y-3">
                  <li><a href="hvac-repair.html" class="text-sm text-[#C4CDD3] transition hover:text-white">HVAC Repair</a></li>
                  <li><a href="hvac-installation.html" class="text-sm text-[#C4CDD3] transition hover:text-white">HVAC Installation</a></li>
                  <li><a href="hvac-maintenance.html" class="text-sm text-[#C4CDD3] transition hover:text-white">HVAC Maintenance</a></li>
                  <li><a href="emergency-hvac-repair.html" class="text-sm text-[#C4CDD3] transition hover:text-white">Emergency HVAC Repair</a></li>
                  <li><a href="hvac-parts.html" class="text-sm text-[#C4CDD3] transition hover:text-white">HVAC Parts</a></li>
                </ul>
              </div>

              <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:col-span-2 xl:col-span-1">
                <h3 class="text-lg font-bold text-white">Contact Info</h3>
                <ul class="mt-5 space-y-4">
                  <li class="flex items-start flex-col gap-3">
                    <div>
                      <p class="text-sm font-semibold text-white">Location</p>
                      <p class="mt-1 text-sm leading-6 text-[#C4CDD3]">Los Angeles, California</p>
                    </div>
                  </li>
                  <li class="flex items-start flex-col gap-3">
                    <div>
                      <p class="text-sm font-semibold text-white">Phone</p>
                      <a href="tel:+10000000000" class="mt-1 block text-sm leading-6 text-[#C4CDD3] transition hover:text-white">+1 (000) 000-0000</a>
                    </div>
                  </li>
                  <li class="flex items-start flex-col gap-3">
                    <div>
                      <p class="text-sm font-semibold text-white">Email</p>
                      <a href="mailto:info@hvacrepair.com" class="mt-1 block text-sm leading-6 text-[#C4CDD3] transition hover:text-white">info@hvacrepair.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                <p class="text-4xl font-extrabold text-white">24/7</p>
                <p class="mt-2 text-sm font-medium text-[#C4CDD3]">Emergency Support</p>
              </div>
              <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                <p class="text-4xl font-extrabold text-white">120+</p>
                <p class="mt-2 text-sm font-medium text-[#C4CDD3]">Service Calls</p>
              </div>
              <div class="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                <p class="text-4xl font-extrabold text-white">90+</p>
                <p class="mt-2 text-sm font-medium text-[#C4CDD3]">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-[#C4CDD3] md:flex-row md:items-center md:justify-between">
          <p>© <span id="year"></span> Los Angeles HVAC Repair. All rights reserved.</p>
          <div class="flex flex-wrap items-center gap-4">
            <a href="about.html" class="transition hover:text-white">About</a>
            <a href="services.html" class="transition hover:text-white">Services</a>
            <a href="faq.html" class="transition hover:text-white">FAQ</a>
            <a href="contact-us.html" class="transition hover:text-white">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
`;

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();