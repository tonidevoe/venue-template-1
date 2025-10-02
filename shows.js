document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("poster-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDetails = document.getElementById("modal-details");
  const modalClose = document.querySelector(".modal-close");

  const shows = [
    { lineup: "Band Name 1", date: "MM/DD/YYYY @ HH:MM" },
    { lineup: "Band Name 2", date: "MM/DD/YYYY @ HH:MM" },
    { lineup: "Band Name 3", date: "MM/DD/YYYY @ HH:MM" },
    { lineup: "Band Name 4", date: "MM/DD/YYYY @ HH:MM" },
  ];

  const container = document.getElementById("poster-grid");
  shows.forEach((show) => {
    const article = document.createElement("article");
    article.className = "poster";
    article.innerHTML = `<h4>${show.lineup}</h4><p>${show.date}</p>`;
    article.addEventListener("click", () => {
      modalTitle.textContent = show.lineup;
      modalDetails.textContent = show.date;
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
    container.appendChild(article);
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
});
