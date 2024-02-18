// Get drawer button and drawer container elements
const drawerBtn = document.querySelector(".btn-menu");
const drawerContainer = document.querySelector(".drawer-container");
const shopButton = document.getElementById("shopButton");
const shopDropdown = document.getElementById("shopDropdown");

const menDrawerButton = document.getElementById("menDrawerButton");
const menDropdown = document.getElementById("menDropdown");

const womenDrawerButton = document.getElementById("womenDrawerButton");
const womenDropdown = document.getElementById("womenDropdown");

// Open draer when drawer button is clicked
drawerBtn.addEventListener("click", () => {
  drawerContainer.classList.toggle("active");
});

// Close drawer when close button is clicked
document.querySelector(".drawer-close-btn").addEventListener("click", () => {
  drawerContainer.classList.remove("active");
});

shopButton.addEventListener("click", () => {
  // Toggle the class to open/close the dropdown
  shopDropdown.classList.toggle("open");

  // Toggle the arrow icon's rotation
  const arrowContainer = document.querySelector(".arrow-down-container");
  arrowContainer.classList.toggle("open");

  // If dropdown is open, set opacity to 1 to make it visible
  if (shopDropdown.classList.contains("open")) {
    shopDropdown.style.display = "block";
    setTimeout(() => {
      shopDropdown.style.opacity = "1";
    }, 10); // Add a small delay for smoother animation
  } else {
    // If dropdown is closed, set opacity to 0 to hide it after transition
    shopDropdown.style.opacity = "0";
    setTimeout(() => {
      shopDropdown.style.display = "none";
    }, 100); // Wait for the transition duration
  }
});

menDrawerButton.addEventListener("click", () => {
  menDropdown.classList.toggle("open");

  const menArrowContainer = document.querySelector(".arrow-down-men");
  menArrowContainer.classList.toggle("open");

  if (menDropdown.classList.contains("open")) {
    menDropdown.style.display = "block";
    setTimeout(() => {
      menDropdown.style.opacity = "1";
    }, 10);
  } else {
    menDropdown.style.opacity = "0";
    setTimeout(() => {
      menDropdown.style.display = "none";
    }, 100);
  }
});

womenDrawerButton.addEventListener("click", () => {
  womenDropdown.classList.toggle("open");

  const womenArrowContainer = document.querySelector(".arrow-down-women");
  womenArrowContainer.classList.toggle("open");

  if (womenDropdown.classList.contains("open")) {
    womenDropdown.style.display = "block";
    setTimeout(() => {
      womenDropdown.style.opacity = "1";
    }, 10);
  } else {
    womenDropdown.style.opacity = "0";
    setTimeout(() => {
      womenDropdown.style.display = "none";
    }, 100);
  }
});
