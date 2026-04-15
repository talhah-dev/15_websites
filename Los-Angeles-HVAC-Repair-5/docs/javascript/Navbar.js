const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <header class="fixed top-0 inset-x-0 z-50 px-4 pt-4">
    <div class="mx-auto max-w-7xl">
      <nav class="rounded-[1.75rem] border border-white/10 bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,50,99,0.35)]">
        <div class="flex items-center justify-between px-5 py-4 lg:px-8">
          <a href="index.html" class="flex items-center gap-3 shrink-0">
            <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#003263] text-white shadow-lg">
              <i class="fa-solid fa-fan text-xl"></i>
            </span>
            <div>
              <p class="text-lg font-extrabold leading-tight text-[#003263]"><span class="md:inline hidden">Los Angeles</span> HVAC Repair</p>
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F0028]"><span class="md:inline hidden">California</span>HVAC Experts</p>
            </div>
          </a>

          <div class="hidden xl:flex items-center rounded-full bg-[#F7F9FB] px-2 py-2">
            <a href="index.html" class="rounded-full px-5 py-3 text-sm font-semibold text-[#003263] transition-all duration-300 hover:bg-white hover:shadow-sm">Home</a>
            <a href="about.html" class="rounded-full px-5 py-3 text-sm font-semibold text-[#003263] transition-all duration-300 hover:bg-white hover:shadow-sm">About</a>

            <div class="relative group">
              <button id="desktopServicesToggle" type="button" class="flex items-center rounded-full px-5 py-3 text-sm font-semibold text-[#003263] transition-all duration-300 hover:bg-white hover:shadow-sm">
                Services
                <svg class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>

              <div id="desktopServicesMenu" class="pointer-events-none invisible absolute left-0 top-full w-72 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div class="rounded-[1.5rem] border border-[#C4CDD3]/40 bg-white p-3 shadow-[0_25px_60px_-15px_rgba(0,50,99,0.3)]">
                  <a href="services.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003263] transition hover:bg-[#F7F9FB]">All Services</a>
                  <a href="hvac-repair.html" class="mt-1 block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003263] transition hover:bg-[#F7F9FB]">HVAC Repair</a>
                  <a href="hvac-installation.html" class="mt-1 block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003263] transition hover:bg-[#F7F9FB]">HVAC Installation</a>
                  <a href="hvac-maintenance.html" class="mt-1 block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003263] transition hover:bg-[#F7F9FB]">HVAC Maintenance</a>
                  <a href="emergency-hvac-repair.html" class="mt-1 block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003263] transition hover:bg-[#F7F9FB]">Emergency HVAC Repair</a>
                  <a href="hvac-parts.html" class="mt-1 block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003263] transition hover:bg-[#F7F9FB]">HVAC Parts</a>
                </div>
              </div>
            </div>

            <a href="faq.html" class="rounded-full px-5 py-3 text-sm font-semibold text-[#003263] transition-all duration-300 hover:bg-white hover:shadow-sm">FAQ</a>
            <a href="contact-us.html" class="rounded-full px-5 py-3 text-sm font-semibold text-[#003263] transition-all duration-300 hover:bg-white hover:shadow-sm">Contact Us</a>
          </div>

          <div class="hidden lg:flex items-center gap-3">
            <a href="tel:+10000000000" class="hidden 2xl:inline-flex items-center rounded-full border border-[#C4CDD3] px-5 py-3 text-sm font-semibold text-[#003263] transition-all duration-300 hover:border-[#003263] hover:bg-[#003263] hover:text-white">
              <i class="fa-solid fa-phone-volume mr-2"></i>
              Call Now
            </a>
            <a href="contact-us.html" class="inline-flex items-center rounded-full bg-[#8F0028] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#740021]">
              Book Service
            </a>
          </div>

          <button id="mobileNavToggle" type="button" class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#003263] text-white lg:hidden" aria-controls="mobileNavPanel" aria-expanded="false">
            <svg id="mobileMenuOpenIcon" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 7H20" stroke-linecap="round"></path>
              <path d="M4 12H20" stroke-linecap="round"></path>
              <path d="M4 17H20" stroke-linecap="round"></path>
            </svg>
            <svg id="mobileMenuCloseIcon" class="hidden h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 6L18 18" stroke-linecap="round"></path>
              <path d="M18 6L6 18" stroke-linecap="round"></path>
            </svg>
          </button>
        </div>

        <div id="mobileNavPanel" class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out lg:hidden">
          <div class="border-t border-[#C4CDD3]/40 px-5 pb-5 pt-4">
            <div class="space-y-2">
              <a href="index.html" class="block rounded-2xl px-4 py-3 text-base font-semibold text-[#003263] transition hover:bg-[#F7F9FB]">Home</a>
              <a href="about.html" class="block rounded-2xl px-4 py-3 text-base font-semibold text-[#003263] transition hover:bg-[#F7F9FB]">About</a>

              <div class="rounded-[1.5rem] bg-[#F7F9FB] p-2">
                <button id="mobileServicesToggle" type="button" class="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-semibold text-[#003263]">
                  <span>Services</span>
                  <svg id="mobileServicesIcon" class="h-5 w-5 transition-transform duration-300" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>

                <div id="mobileServicesMenu" class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out">
                  <div class="mt-1 space-y-1 px-2 pb-2">
                    <a href="services.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003263] transition hover:bg-white">All Services</a>
                    <a href="hvac-repair.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003263] transition hover:bg-white">HVAC Repair</a>
                    <a href="hvac-installation.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003263] transition hover:bg-white">HVAC Installation</a>
                    <a href="hvac-maintenance.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003263] transition hover:bg-white">HVAC Maintenance</a>
                    <a href="emergency-hvac-repair.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003263] transition hover:bg-white">Emergency HVAC Repair</a>
                    <a href="hvac-parts.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#003263] transition hover:bg-white">HVAC Parts</a>
                  </div>
                </div>
              </div>

              <a href="faq.html" class="block rounded-2xl px-4 py-3 text-base font-semibold text-[#003263] transition hover:bg-[#F7F9FB]">FAQ</a>
              <a href="contact-us.html" class="block rounded-2xl px-4 py-3 text-base font-semibold text-[#003263] transition hover:bg-[#F7F9FB]">Contact Us</a>
            </div>

            <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a href="tel:+10000000000" class="inline-flex items-center justify-center rounded-2xl border border-[#C4CDD3] px-5 py-4 text-sm font-semibold text-[#003263] transition-all duration-300 hover:bg-[#003263] hover:text-white">
                <i class="fa-solid fa-phone-volume mr-2"></i>
                Call Now
              </a>
              <a href="contact-us.html" class="inline-flex items-center justify-center rounded-2xl bg-[#8F0028] px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#740021]">
                Book Service
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
`;

const mobileNavToggle = document.getElementById("mobileNavToggle");
const mobileNavPanel = document.getElementById("mobileNavPanel");
const mobileMenuOpenIcon = document.getElementById("mobileMenuOpenIcon");
const mobileMenuCloseIcon = document.getElementById("mobileMenuCloseIcon");
const mobileServicesToggle = document.getElementById("mobileServicesToggle");
const mobileServicesMenu = document.getElementById("mobileServicesMenu");
const mobileServicesIcon = document.getElementById("mobileServicesIcon");

if (mobileNavToggle && mobileNavPanel) {
  mobileNavToggle.addEventListener("click", () => {
    const isOpen = mobileNavPanel.style.maxHeight && mobileNavPanel.style.maxHeight !== "0px";

    if (isOpen) {
      mobileNavPanel.style.maxHeight = "0px";
      mobileNavPanel.classList.add("opacity-0");
      mobileNavToggle.setAttribute("aria-expanded", "false");
      mobileMenuOpenIcon.classList.remove("hidden");
      mobileMenuCloseIcon.classList.add("hidden");
    } else {
      mobileNavPanel.style.maxHeight = mobileNavPanel.scrollHeight + "px";
      mobileNavPanel.classList.remove("opacity-0");
      mobileNavToggle.setAttribute("aria-expanded", "true");
      mobileMenuOpenIcon.classList.add("hidden");
      mobileMenuCloseIcon.classList.remove("hidden");
    }
  });
}

if (mobileServicesToggle && mobileServicesMenu) {
  mobileServicesToggle.addEventListener("click", () => {
    const isOpen = mobileServicesMenu.style.maxHeight && mobileServicesMenu.style.maxHeight !== "0px";

    if (isOpen) {
      mobileServicesMenu.style.maxHeight = "0px";
      mobileServicesMenu.classList.add("opacity-0");
      mobileServicesIcon.classList.remove("rotate-180");
    } else {
      mobileServicesMenu.style.maxHeight = mobileServicesMenu.scrollHeight + "px";
      mobileServicesMenu.classList.remove("opacity-0");
      mobileServicesIcon.classList.add("rotate-180");
    }

    setTimeout(() => {
      if (mobileNavPanel.style.maxHeight !== "0px") {
        mobileNavPanel.style.maxHeight = mobileNavPanel.scrollHeight + "px";
      }
    }, 300);
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    mobileNavPanel.style.maxHeight = "";
    mobileServicesMenu.style.maxHeight = "";
    mobileNavPanel.classList.remove("opacity-0");
    mobileServicesMenu.classList.remove("opacity-0");
    mobileServicesIcon.classList.remove("rotate-180");
    mobileMenuOpenIcon.classList.remove("hidden");
    mobileMenuCloseIcon.classList.add("hidden");
    mobileNavToggle.setAttribute("aria-expanded", "false");
  } else {
    if (!mobileNavPanel.style.maxHeight) {
      mobileNavPanel.style.maxHeight = "0px";
      mobileNavPanel.classList.add("opacity-0");
    }
    if (!mobileServicesMenu.style.maxHeight) {
      mobileServicesMenu.style.maxHeight = "0px";
      mobileServicesMenu.classList.add("opacity-0");
    }
  }
});
