const footer = document.getElementById("footer");

footer.innerHTML = `
<footer class="relative overflow-hidden bg-[#041e42] text-white">
  <div class="absolute inset-0">
    <div class="absolute -top-24 left-0 h-72 w-72 rounded-full bg-[#ffb81c]/10 blur-3xl"></div>
    <div class="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#ffb81c]/10 blur-3xl"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,184,28,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,184,28,0.10),transparent_28%)]"></div>
  </div>

  <div class="relative border-b border-white/10">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-16 lg:py-20">
      <div class="max-w-2xl">
        <span class="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white/90 backdrop-blur-sm">
          Wall Oven Repair
        </span>
        <h2 class="mt-6 sm:text-4xl text-2xl font-bold leading-tight text-white">
          Reliable wall oven service with a premium customer experience from start to finish
        </h2>
        <p class="mt-4 leading-7 text-slate-300">
          From repairs and installation to maintenance, emergency support, and parts assistance, we help
          homeowners get dependable wall oven service with professionalism, care, and fast response.
        </p>

        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href="contact-us.html" class="inline-flex items-center justify-center rounded-full bg-[#ffb81c] px-7 py-4 font-semibold text-[#041e42] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(255,184,28,0.28)]">
            Request Service
          </a>
          <a href="services.html" class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15">
            Explore Services
          </a>
        </div>
      </div>

      <div class="grid gap-5 grid-cols-1">
        <div class="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffb81c] text-[#041e42]">
            <i class="fa-solid fa-phone-volume text-lg"></i>
          </div>
          <h3 class="mt-5 text-xl font-bold text-white">Call for Service</h3>
          <p class="mt-3 leading-7 text-slate-300">
            Reach out today to schedule professional wall oven support for your home.
          </p>
          <a href="contact-us.html" class="mt-5 inline-flex items-center text-sm font-semibold text-[#ffb81c] transition duration-300 hover:translate-x-1">
            Contact Us
            <i class="fa-solid fa-arrow-right ml-2 text-xs"></i>
          </a>
        </div>

        <div class="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffb81c] text-[#041e42]">
            <i class="fa-solid fa-clock text-lg"></i>
          </div>
          <h3 class="mt-5 text-xl font-bold text-white">Fast Response</h3>
          <p class="mt-3 leading-7 text-slate-300">
            Prompt scheduling and dependable service when your wall oven needs attention.
          </p>
          <a href="emergency-wall-oven-repair.html" class="mt-5 inline-flex items-center text-sm font-semibold text-[#ffb81c] transition duration-300 hover:translate-x-1">
            Emergency Support
            <i class="fa-solid fa-arrow-right ml-2 text-xs"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="relative">
    <div class="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
      <div class="grid gap-12 lg:grid-cols-[1fr_0.7fr_0.7fr_0.9fr]">
        <div>
          <a href="index.html" class="inline-flex items-center gap-3">
            <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffb81c] text-[#041e42] shadow-[0_12px_30px_rgba(255,184,28,0.22)]">
              <i class="fa-solid fa-fire-burner text-xl"></i>
            </span>
            <span class="text-2xl font-bold tracking-tight text-white">Wall Oven Repair</span>
          </a>
          <p class="mt-5 max-w-sm leading-7 text-slate-300">
            Premium wall oven repair and support services focused on reliability, safety, and a polished
            service experience for local homeowners.
          </p>

          <div class="mt-6 flex items-center gap-3">
            <a href="index.html" class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition duration-300 hover:-translate-y-1 hover:bg-[#ffb81c] hover:text-[#041e42]">
              <i class="fa-solid fa-house"></i>
            </a>
            <a href="about.html" class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition duration-300 hover:-translate-y-1 hover:bg-[#ffb81c] hover:text-[#041e42]">
              <i class="fa-solid fa-user-group"></i>
            </a>
            <a href="services.html" class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition duration-300 hover:-translate-y-1 hover:bg-[#ffb81c] hover:text-[#041e42]">
              <i class="fa-solid fa-screwdriver-wrench"></i>
            </a>
            <a href="contact-us.html" class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition duration-300 hover:-translate-y-1 hover:bg-[#ffb81c] hover:text-[#041e42]">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white">Quick Links</h3>
          <ul class="mt-5 space-y-4">
            <li><a href="index.html" class="text-slate-300 transition duration-300 hover:text-[#ffb81c]">Home</a></li>
            <li><a href="about.html" class="text-slate-300 transition duration-300 hover:text-[#ffb81c]">About</a></li>
            <li><a href="services.html" class="text-slate-300 transition duration-300 hover:text-[#ffb81c]">Services</a></li>
            <li><a href="faq.html" class="text-slate-300 transition duration-300 hover:text-[#ffb81c]">FAQ</a></li>
            <li><a href="contact-us.html" class="text-slate-300 transition duration-300 hover:text-[#ffb81c]">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white">Our Services</h3>
          <ul class="mt-5 space-y-4">
            <li><a href="wall-oven-repair.html" class="text-slate-300 transition duration-300 hover:text-[#ffb81c]">Wall Oven Repair</a></li>
            <li><a href="wall-oven-installation.html" class="text-slate-300 transition duration-300 hover:text-[#ffb81c]">Wall Oven Installation</a></li>
            <li><a href="wall-oven-maintenance.html" class="text-slate-300 transition duration-300 hover:text-[#ffb81c]">Wall Oven Maintenance</a></li>
            <li><a href="emergency-wall-oven-repair.html" class="text-slate-300 transition duration-300 hover:text-[#ffb81c]">Emergency Wall Oven Repair</a></li>
            <li><a href="wall-oven-parts.html" class="text-slate-300 transition duration-300 hover:text-[#ffb81c]">Wall Oven Parts</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white">Get In Touch</h3>
          <div class="mt-5 space-y-4">
            <div class="flex items-start gap-3">
              <span class="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#ffb81c]">
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <p class="leading-7 text-slate-300">
                Serving local homeowners with trusted wall oven service and support
              </p>
            </div>

            <div class="flex items-start gap-3">
              <span class="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#ffb81c]">
                <i class="fa-solid fa-phone"></i>
              </span>
              <p class="leading-7 text-slate-300">
                Contact our team for repair requests, installation appointments, and urgent service needs
              </p>
            </div>

            <div class="flex items-start gap-3">
              <span class="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#ffb81c]">
                <i class="fa-solid fa-envelope-open-text"></i>
              </span>
              <p class="leading-7 text-slate-300">
                Visit our contact page to send your service request and get started
              </p>
            </div>
          </div>

          <a href="contact-us.html" class="mt-6 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-[#ffb81c] hover:text-[#ffb81c]">
            Contact Us Today
          </a>
        </div>
      </div>

      <div class="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2025 Wall Oven Repair. All rights reserved.</p>
        <div class="flex flex-wrap items-center gap-5">
          <a href="about.html" class="transition duration-300 hover:text-[#ffb81c]">About Company</a>
          <a href="services.html" class="transition duration-300 hover:text-[#ffb81c]">Our Services</a>
          <a href="faq.html" class="transition duration-300 hover:text-[#ffb81c]">FAQ</a>
          <a href="contact-us.html" class="transition duration-300 hover:text-[#ffb81c]">Request Service</a>
        </div>
      </div>
    </div>
  </div>
</footer>
`;