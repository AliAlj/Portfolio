const yearEl = document.getElementById("year");
yearEl.textContent = String(new Date().getFullYear());

const copyBtn = document.getElementById("copyEmailBtn");
const hint = document.getElementById("copyHint");

const email = "alimjahmi@gmail.com";

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    hint.textContent = "Copied. Paste it into your email client.";
  } catch {
    hint.textContent = "Copy failed. Email is: " + email;
  }
});

document.getElementById("githubLink").setAttribute("href", "https://github.com/AliAlj");
document.getElementById("linkedinLink").setAttribute("href", "https://www.linkedin.com/in/ali-alj/");
document.getElementById("emailLink").setAttribute("href", `mailto:${email}`);