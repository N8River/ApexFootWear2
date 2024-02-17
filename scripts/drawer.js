// Get drawer button and drawer container elements
const drawerBtn = document.querySelector(".drawer-btn");
const drawerContainer = document.querySelector(".drawer-container");

// Add click event listener to drawer button
drawerBtn.addEventListener("click", () => {
  // Toggle 'active' class to show/hide drawer container
  drawerContainer.classList.toggle("active");
});

// Close drawer when close button is clicked
document.querySelector(".drawer-close-btn").addEventListener("click", () => {
  drawerContainer.classList.remove("active");
});
