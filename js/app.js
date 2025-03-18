const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentStep = parseInt(localStorage.getItem("progressStep") || 1);
updateProgress();

nextBtn.addEventListener("click", () => {
  currentStep++;
  if (currentStep > circles.length) currentStep = circles.length;
  updateProgress();
});

prevBtn.addEventListener("click", () => {
  currentStep--;
  if (currentStep < 1) currentStep = 1;
  updateProgress();
});

function updateProgress() {
  circles.forEach((circle, idx) => {
    if (idx < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const progressWidth = ((currentStep - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${progressWidth}%`;

  prevBtn.disabled = currentStep === 1;
  nextBtn.disabled = currentStep === circles.length;

  localStorage.setItem("progressStep", currentStep);
}
