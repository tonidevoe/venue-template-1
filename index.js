document.addEventListener("DOMContentLoaded", () => {
  const bigredBtn = document.getElementById("bigred-btn");
  const restoreBtn = document.getElementById("restore-btn");
  const closeBtn = document.getElementById("popup-close");
  const errorPopup = document.getElementById("error-popup");
  const errorBg = document.getElementById("error-bg");

  const fakeChars = "01!@#$%^&*()-_=+[]{}|;:',.<>/?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let errorLines = [];

  function generateRandomLine(length = 600) {
    let line = "";
    for (let i = 0; i < length; i++) {
      line += fakeChars[Math.floor(Math.random() * fakeChars.length)];
    }
    return line;
  }

  function fillErrorBackground() {
    if (!errorBg) return;
    const linesCount = Math.floor(window.innerHeight / 18);

    // Initialize/partially refresh lines
    if (!errorLines.length) {
      errorLines = Array.from({ length: linesCount }, () => generateRandomLine());
    } else {
      for (let i = 0; i < Math.floor(linesCount / 5); i++) {
        const idx = Math.floor(Math.random() * linesCount);
        errorLines[idx] = generateRandomLine();
      }
    }
    errorBg.textContent = errorLines.join("\n");
  }

  function activateRSOD() {
    document.body.classList.add("rsod-active");
    errorPopup.style.display = "block";
    errorBg.style.display = "block";
    fillErrorBackground();
  }

  function restoreSite() {
    document.body.classList.remove("rsod-active");
    errorPopup.style.display = "none";
    errorBg.style.display = "none";
    errorLines = [];
  }

  bigredBtn.addEventListener("click", activateRSOD);
  restoreBtn.addEventListener("click", restoreSite);
  closeBtn.addEventListener("click", restoreSite);

  setInterval(() => {
    if (document.body.classList.contains("rsod-active")) fillErrorBackground();
  }, 300);

  // Show posters
  const shows = [
    { lineup: "Band Name", date: "MM/DD/YYYY @ HH:MM" },
    { lineup: "Band Name", date: "MM/DD/YYYY @ HH:MM" },
    { lineup: "Band Name", date: "MM/DD/YYYY @ HH:MM" }
  ];

  const container = document.getElementById("shows");
  shows.forEach(show => {
    const article = document.createElement("article");
    article.className = "poster";
    article.innerHTML = `<h4>${show.lineup}</h4><p>${show.date}</p>`;
    container.appendChild(article);
  });
});
