const navbar = document.getElementById("navbar");

if (navbar) {
  navbar.innerHTML = `
<header class="fixed inset-x-0 top-0 z-50 px-4 pt-4">
  <div class="mx-auto max-w-7xl">
    <nav class="rounded-[2rem] border border-white/10 bg-[#505a7b]/[0.94] text-white shadow-[0_28px_80px_-28px_rgba(80,90,123,0.7)] backdrop-blur-xl">
      <div class="flex items-center justify-between gap-4 px-5 py-4 lg:px-7">
        <a href="index.html" class="flex min-w-0 items-center gap-3">
          <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.35rem] bg-[#ab84ce] text-white shadow-[0_12px_30px_-14px_rgba(171,132,206,0.9)]">
            <i class="fa-solid fa-snowflake text-xl"></i>
          </span>
          <div class="min-w-0">
            <p class="truncate text-lg font-black leading-tight text-white">AC Repair Scottsdale</p>
            <p class="truncate text-[11px] font-semibold uppercase tracking-[0.28em] text-[#cec374]">Phoenix Cooling Experts</p>
          </div>
        </a>

        <div class="hidden xl:flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.08] px-3 py-2">
          <a href="index.html" class="rounded-full px-4 py-3 text-sm font-semibold text-white/[0.88] transition hover:bg-[#ab84ce] hover:text-white">Home</a>
          <a href="about.html" class="rounded-full px-4 py-3 text-sm font-semibold text-white/[0.88] transition hover:bg-[#ab84ce] hover:text-white">About</a>

          <div class="relative group">
            <button type="button" class="flex items-center rounded-full px-4 py-3 text-sm font-semibold text-white/[0.88] transition hover:bg-[#ab84ce] hover:text-white">
              Services
              <svg class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 7.5L10 12.5L15 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>

            <div class="pointer-events-none invisible absolute left-0 top-full w-72 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div class="rounded-[1.5rem] border border-[#ab84ce]/10 bg-white p-3 text-[#505a7b] shadow-[0_28px_70px_-24px_rgba(80,90,123,0.35)]">
                <a href="services.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-[#f7f3fb]">All Services</a>
                <a href="ac-repair.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-[#f7f3fb]">AC Repair</a>
                <a href="ac-installation.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-[#f7f3fb]">AC Installation</a>
                <a href="ac-maintenance.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-[#f7f3fb]">AC Maintenance</a>
                <a href="emergency-ac-repair.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-[#f7f3fb]">Emergency AC Repair</a>
                <a href="ac-parts.html" class="block rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-[#f7f3fb]">AC Parts</a>
              </div>
            </div>
          </div>

          <a href="faq.html" class="rounded-full px-4 py-3 text-sm font-semibold text-white/[0.88] transition hover:bg-[#ab84ce] hover:text-white">FAQ</a>
          <a href="contact-us.html" class="rounded-full px-4 py-3 text-sm font-semibold text-white/[0.88] transition hover:bg-[#ab84ce] hover:text-white">Contact</a>
        </div>

        <div class="hidden lg:flex items-center gap-3">
          <a href="tel:+10000000000" class="inline-flex items-center rounded-full border border-[#cec374]/50 bg-[#cec374]/10 px-5 py-3 text-sm font-semibold text-[#f1e8a8] transition hover:bg-[#cec374] hover:text-[#505a7b]">
            <i class="fa-solid fa-phone-volume mr-2"></i>
            Call Now
          </a>

          <a href="contact-us.html" class="inline-flex items-center rounded-full bg-[#ab84ce] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_-18px_rgba(171,132,206,0.9)] transition hover:bg-[#9f75c7]">
            Book Service
          </a>
        </div>

        <button
          id="mobileNavToggle"
          type="button"
          aria-expanded="false"
          aria-controls="mobileNavMenu"
          aria-label="Toggle navigation menu"
          class="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white transition hover:bg-white/20 xl:hidden"
        >
          <svg id="mobileMenuOpenIcon" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 7H20"></path>
            <path d="M4 12H20"></path>
            <path d="M4 17H20"></path>
          </svg>
          <svg id="mobileMenuCloseIcon" class="hidden h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 6L18 18"></path>
            <path d="M18 6L6 18"></path>
          </svg>
        </button>
      </div>

      <div
        id="mobileNavMenu"
        class="max-h-0 overflow-hidden border-t border-white/10 px-5 pb-0 pt-0 opacity-0 transition-all duration-300 ease-in-out pointer-events-none xl:hidden"
      >
        <div class="flex flex-col gap-2">
          <div class="rounded-[1.5rem] bg-white/[0.06] p-3 text-center">
            <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#cec374]">AC Repair Scottsdale</p>
            <p class="mt-1 text-sm text-white/70">Built for Scottsdale homes and businesses</p>
          </div>

          <a href="index.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#ab84ce] hover:text-white">Home</a>
          <a href="about.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#ab84ce] hover:text-white">About</a>

          <div class="rounded-[1.5rem] bg-white/[0.07] p-2">
            <button
              id="mobileServicesToggle"
              type="button"
              aria-expanded="false"
              aria-controls="mobileServicesMenu"
              class="flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm font-semibold text-white"
            >
              <span>Services</span>
              <svg id="mobileServicesIcon" class="h-4 w-4 transition-transform duration-300" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 7.5L10 12.5L15 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>

            <div id="mobileServicesMenu" class="max-h-0 overflow-hidden px-1 pb-0 pt-0 opacity-0 transition-all duration-300 ease-in-out">
              <div class="flex flex-col gap-1 rounded-[1.25rem] bg-white p-2 text-[#505a7b]">
                <a href="services.html" class="rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-[#f7f3fb]">All Services</a>
                <a href="ac-repair.html" class="rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-[#f7f3fb]">AC Repair</a>
                <a href="ac-installation.html" class="rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-[#f7f3fb]">AC Installation</a>
                <a href="ac-maintenance.html" class="rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-[#f7f3fb]">AC Maintenance</a>
                <a href="emergency-ac-repair.html" class="rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-[#f7f3fb]">Emergency AC Repair</a>
                <a href="ac-parts.html" class="rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-[#f7f3fb]">AC Parts</a>
              </div>
            </div>
          </div>

          <a href="faq.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#ab84ce] hover:text-white">FAQ</a>
          <a href="contact-us.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#ab84ce] hover:text-white">Contact</a>

          <div class="flex flex-col gap-2 pt-2 sm:flex-row">
            <a href="tel:+10000000000" class="inline-flex items-center justify-center rounded-full border border-[#cec374]/50 bg-[#cec374]/10 px-5 py-3 text-sm font-semibold text-[#f1e8a8] transition hover:bg-[#cec374] hover:text-[#505a7b]">
              <i class="fa-solid fa-phone-volume mr-2"></i>
              Call Now
            </a>
            <a href="contact-us.html" class="inline-flex items-center justify-center rounded-full bg-[#ab84ce] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9f75c7]">
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
  const mobileNavMenu = document.getElementById("mobileNavMenu");
  const mobileMenuOpenIcon = document.getElementById("mobileMenuOpenIcon");
  const mobileMenuCloseIcon = document.getElementById("mobileMenuCloseIcon");
  const mobileServicesToggle = document.getElementById("mobileServicesToggle");
  const mobileServicesMenu = document.getElementById("mobileServicesMenu");
  const mobileServicesIcon = document.getElementById("mobileServicesIcon");
  const mobileNavLinks = mobileNavMenu?.querySelectorAll("a");

  const closeServicesMenu = () => {
    if (!mobileServicesToggle || !mobileServicesMenu || !mobileServicesIcon) {
      return;
    }

    mobileServicesToggle.setAttribute("aria-expanded", "false");
    mobileServicesMenu.classList.remove("max-h-96", "pt-2", "pb-1", "opacity-100");
    mobileServicesMenu.classList.add("max-h-0", "pt-0", "pb-0", "opacity-0");
    mobileServicesIcon.classList.remove("rotate-180");
  };

  const closeMobileMenu = () => {
    if (!mobileNavToggle || !mobileNavMenu || !mobileMenuOpenIcon || !mobileMenuCloseIcon) {
      return;
    }

    mobileNavToggle.setAttribute("aria-expanded", "false");
    mobileNavMenu.classList.remove("max-h-[80vh]", "pt-4", "pb-5", "opacity-100", "pointer-events-auto");
    mobileNavMenu.classList.add("max-h-0", "pt-0", "pb-0", "opacity-0", "pointer-events-none");
    mobileMenuOpenIcon.classList.remove("hidden");
    mobileMenuCloseIcon.classList.add("hidden");
    closeServicesMenu();
  };

  const openMobileMenu = () => {
    if (!mobileNavToggle || !mobileNavMenu || !mobileMenuOpenIcon || !mobileMenuCloseIcon) {
      return;
    }

    mobileNavToggle.setAttribute("aria-expanded", "true");
    mobileNavMenu.classList.remove("max-h-0", "pt-0", "pb-0", "opacity-0", "pointer-events-none");
    mobileNavMenu.classList.add("max-h-[80vh]", "pt-4", "pb-5", "opacity-100", "pointer-events-auto");
    mobileMenuOpenIcon.classList.add("hidden");
    mobileMenuCloseIcon.classList.remove("hidden");
  };

  mobileNavToggle?.addEventListener("click", () => {
    const isOpen = mobileNavToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMobileMenu();
      return;
    }

    openMobileMenu();
  });

  mobileServicesToggle?.addEventListener("click", () => {
    const isExpanded = mobileServicesToggle.getAttribute("aria-expanded") === "true";
    mobileServicesToggle.setAttribute("aria-expanded", String(!isExpanded));
    mobileServicesMenu?.classList.toggle("max-h-0", isExpanded);
    mobileServicesMenu?.classList.toggle("pt-0", isExpanded);
    mobileServicesMenu?.classList.toggle("pb-0", isExpanded);
    mobileServicesMenu?.classList.toggle("opacity-0", isExpanded);
    mobileServicesMenu?.classList.toggle("max-h-96", !isExpanded);
    mobileServicesMenu?.classList.toggle("pt-2", !isExpanded);
    mobileServicesMenu?.classList.toggle("pb-1", !isExpanded);
    mobileServicesMenu?.classList.toggle("opacity-100", !isExpanded);
    mobileServicesIcon?.classList.toggle("rotate-180", !isExpanded);
  });

  mobileNavLinks?.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1280) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });
}