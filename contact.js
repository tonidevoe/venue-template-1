document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("booking");

  form.querySelectorAll("input, textarea").forEach((el) => {
    el.addEventListener("focus", () => {
      el.style.boxShadow = "0 0 5px #f04";
    });
    el.addEventListener("blur", () => {
      el.style.boxShadow = "none";
    });
  });

  form.addEventListener("submit", (e) => {
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const reason = form.querySelector("#reason").value.trim();
    const message = form.querySelector("#message").value.trim();
    if (!name || !email || !reason || !message) {
      e.preventDefault();
      alert("All fields are required.");
    }
  });
});
