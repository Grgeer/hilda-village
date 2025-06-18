const steamSlides = document.getElementById("steamSlides");
const totalSteamSlides = steamSlides.children.length;
let currentSteamIndex = 0;

const steamDotsContainer = document.getElementById("steamDots");

for (let i = 0; i < totalSteamSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSteamSlide(i));
  steamDotsContainer.appendChild(dot);
}

function updateSteamDots() {
  const allDots = document.querySelectorAll("#steamDots .dot");
  allDots.forEach(dot => dot.classList.remove("active"));
  allDots[currentSteamIndex].classList.add("active");
}

function goToSteamSlide(index) {
  currentSteamIndex = index;
  steamSlides.style.transform = `translateX(-${index * 100}%)`;
  updateSteamDots();
}

function nextSteamSlide() {
  currentSteamIndex = (currentSteamIndex + 1) % totalSteamSlides;
  goToSteamSlide(currentSteamIndex);
}

function prevSteamSlide() {
  currentSteamIndex = (currentSteamIndex - 1 + totalSteamSlides) % totalSteamSlides;
  goToSteamSlide(currentSteamIndex);
}
