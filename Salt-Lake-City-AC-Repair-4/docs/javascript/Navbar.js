const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <nav class="py-5 lg:fixed inset-x-0 top-0 z-50 w-full bg-white transition-all duration-500">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="w-full flex flex-col lg:flex-row">
        <div class="flex justify-between lg:flex-row w-full">
          <a href="index.html" class="flex items-center gap-3">
            <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#001D3E] text-white shadow-sm">
              <i class="fa-solid fa-fan"></i>
            </span>
            <div>
              <p class="text-lg font-extrabold leading-tight text-[#001D3E]">Salt Lake City AC Repair</p>
              <p class="text-xs font-semibold text-slate-500">Utah Cooling Company</p>
            </div>
          </a>
          <button id="mobileNavToggle" type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <div id="navbar-default"
          class="w-full lg:flex lg:pl-8 max-lg:overflow-hidden max-lg:max-h-0 max-lg:opacity-0 max-lg:scale-y-95 max-lg:origin-top max-lg:transition-all max-lg:duration-500 max-lg:ease-in-out lg:max-h-none lg:opacity-100 lg:scale-y-100">
          <ul class="flex lg:items-center flex-col max-lg:gap-4 mt-4 lg:mt-0 lg:flex-row max-lg:mb-4 lg:flex-wrap">
            <li><a href="index.html" class="text-gray-500 text-base font-medium hover:text-[#001D3E] transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left">Home</a></li>
            <li><a href="about.html" class="text-gray-500 text-base font-medium hover:text-[#001D3E] transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left">About</a></li>

            <li class="relative group">
              <button id="servicesDropdownToggle" type="button"
                class="flex items-center text-gray-500 text-base font-medium hover:text-[#001D3E] transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left w-full">
                Services
                <svg class="w-4 h-4 ml-2 transition-transform duration-300" id="servicesDropdownIcon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <div id="servicesDropdownMenu"
                class="max-lg:overflow-hidden max-lg:max-h-0 max-lg:opacity-0 max-lg:transition-all max-lg:duration-500 max-lg:ease-in-out lg:hidden lg:absolute lg:top-full lg:left-0 lg:min-w-[250px] bg-white lg:shadow-xl lg:border lg:border-gray-100 rounded-2xl py-0 lg:py-2 z-50">
                <a href="services.html" class="block px-5 py-3 text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-[#001D3E]">All Services</a>
                <a href="ac-repair.html" class="block px-5 py-3 text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-[#001D3E]">AC Repair</a>
                <a href="ac-installation.html" class="block px-5 py-3 text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-[#001D3E]">AC Installation</a>
                <a href="ac-maintenance.html" class="block px-5 py-3 text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-[#001D3E]">AC Maintenance</a>
                <a href="emergency-ac-repair.html" class="block px-5 py-3 text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-[#001D3E]">Emergency AC Repair</a>
                <a href="ac-parts.html" class="block px-5 py-3 text-gray-500 text-sm font-medium hover:bg-gray-50 hover:text-[#001D3E]">AC Parts</a>
              </div>
            </li>

            <li><a href="faq.html" class="text-gray-500 text-base font-medium hover:text-[#001D3E] transition-all duration-500 mb-2 block lg:mr-6 md:mb-0 lg:text-left">FAQ</a></li>
            <li><a href="contact-us.html" class="text-gray-500 text-base font-medium hover:text-[#001D3E] transition-all duration-500 mb-2 block md:mb-0 lg:text-left">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
`;

const mobileNavToggle = document.getElementById("mobileNavToggle");
const mobileNav = document.getElementById("navbar-default");
const servicesDropdownToggle = document.getElementById("servicesDropdownToggle");
const servicesDropdownMenu = document.getElementById("servicesDropdownMenu");
const servicesDropdownIcon = document.getElementById("servicesDropdownIcon");

if (mobileNavToggle && mobileNav) {
  mobileNavToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.contains("max-lg:max-h-[500px]");

    if (isOpen) {
      mobileNav.classList.remove("max-lg:max-h-[500px]", "max-lg:opacity-100", "max-lg:scale-y-100", "max-lg:py-4");
      mobileNav.classList.add("max-lg:max-h-0", "max-lg:opacity-0", "max-lg:scale-y-95");
      mobileNavToggle.setAttribute("aria-expanded", "false");
    } else {
      mobileNav.classList.remove("max-lg:max-h-0", "max-lg:opacity-0", "max-lg:scale-y-95");
      mobileNav.classList.add("max-lg:max-h-[500px]", "max-lg:opacity-100", "max-lg:scale-y-100", "max-lg:py-4");
      mobileNavToggle.setAttribute("aria-expanded", "true");
    }
  });
}

if (servicesDropdownToggle && servicesDropdownMenu) {
  servicesDropdownToggle.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
      const isOpen = servicesDropdownMenu.classList.contains("max-lg:max-h-[400px]");

      if (isOpen) {
        servicesDropdownMenu.classList.remove("max-lg:max-h-[400px]", "max-lg:opacity-100", "py-2");
        servicesDropdownMenu.classList.add("max-lg:max-h-0", "max-lg:opacity-0", "py-0");
        servicesDropdownIcon.classList.remove("rotate-180");
      } else {
        servicesDropdownMenu.classList.remove("max-lg:max-h-0", "max-lg:opacity-0", "py-0");
        servicesDropdownMenu.classList.add("max-lg:max-h-[400px]", "max-lg:opacity-100", "py-2");
        servicesDropdownIcon.classList.add("rotate-180");
      }
    }
  });

  const servicesMenuWrapper = servicesDropdownToggle.closest(".group");

  if (servicesMenuWrapper) {
    servicesMenuWrapper.addEventListener("mouseenter", () => {
      if (window.innerWidth >= 1024) {
        servicesDropdownMenu.classList.remove("lg:hidden");
        servicesDropdownMenu.classList.add("lg:block");
      }
    });

    servicesMenuWrapper.addEventListener("mouseleave", () => {
      if (window.innerWidth >= 1024) {
        servicesDropdownMenu.classList.remove("lg:block");
        servicesDropdownMenu.classList.add("lg:hidden");
      }
    });
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    mobileNav.classList.remove("max-lg:max-h-0", "max-lg:max-h-[500px]", "max-lg:opacity-0", "max-lg:opacity-100", "max-lg:scale-y-95", "max-lg:scale-y-100", "max-lg:py-4");
    servicesDropdownMenu.classList.remove("max-lg:max-h-0", "max-lg:max-h-[400px]", "max-lg:opacity-0", "max-lg:opacity-100", "py-0", "py-2");
    servicesDropdownIcon.classList.remove("rotate-180");
    mobileNavToggle.setAttribute("aria-expanded", "false");
  } else {
    mobileNav.classList.add("max-lg:max-h-0", "max-lg:opacity-0", "max-lg:scale-y-95");
    servicesDropdownMenu.classList.add("max-lg:max-h-0", "max-lg:opacity-0", "py-0");
  }
});