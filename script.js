// Typing Effect
const text = "Web Developer & Designer";
const typingText = document.getElementById("typingText");
let index = 0;

function type() {
    typingText.innerText = text.slice(0, index++);
    if (index <= text.length) {
        setTimeout(type, 80);
    }
}
type();

// Dark Mode
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

document.getElementById("waForm").addEventListener("submit", function(e){
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  const nomor = "6285746863781"; // GANTI DENGAN NOMOR WA KAMU
  const url = `https://wa.me/${nomor}?text=Halo,%20saya%20${encodeURIComponent(nama)}.%0AEmail:%20${encodeURIComponent(email)}.%0A%0A${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
});
