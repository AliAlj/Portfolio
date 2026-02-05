const yearEl = document.getElementById("year");
yearEl.textContent = String(new Date().getFullYear());

console.log("Portfolio loaded - Ali Aljahmi");

document.addEventListener('DOMContentLoaded', function() {
  const email = "alimjahmi@gmail.com";
  
  const githubLinks = document.querySelectorAll('.connect-link');
  githubLinks.forEach(link => {
    if (link.textContent.includes('GitHub')) {
      link.href = "https://github.com/AliAlj";
      link.querySelector('.connect-text').textContent = '/AliAlj';
    }
  });
  
  const linkedinLinks = document.querySelectorAll('.connect-link');
  linkedinLinks.forEach(link => {
    if (link.textContent.includes('LinkedIn')) {
      link.href = "https://www.linkedin.com/in/ali-alj/";
      link.querySelector('.connect-text').textContent = '/ali-alj';
    }
  });
  
  const emailLinks = document.querySelectorAll('.connect-link');
  emailLinks.forEach(link => {
    if (link.textContent.includes('Email')) {
      link.href = `mailto:${email}`;
      link.querySelector('.connect-text').textContent = email;
    }
  });
});