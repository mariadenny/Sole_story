document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll to image grid
  const scrollArrow = document.querySelector(".scroll-down-arrow");
  const imageGrid = document.getElementById("image-grid");

  if (scrollArrow && imageGrid) {
    scrollArrow.addEventListener("click", () => {
      imageGrid.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Team member hover toggle for photos
  const members = document.querySelectorAll(".team-member");

  members.forEach(member => {
    const photo = member.querySelector(".team-photo");

    member.addEventListener("mouseenter", () => {
      if (photo) photo.style.display = "inline-block";
    });

    member.addEventListener("mouseleave", () => {
      if (photo) photo.style.display = "none";
    });
  });
});