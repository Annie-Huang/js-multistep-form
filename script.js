const multiStepForm = document.querySelector('[data-multi-step]');
const formSteps = [...document.querySelectorAll('[data-step]')];

let currentStep = parseInt(
  formSteps.findIndex((step) => step.classList.contains('active'))
);

// console.log(currentStep);
if (currentStep < 0) {
  currentStep = 0;
  // formSteps[currentStep].classList.add('active');
  showCurrentStep();
}

multiStepForm.addEventListener('click', (e) => {
  if (e.target.matches('[data-next]')) {
    currentStep += 1;
  } else if (e.target.matches('[data-previous]')) {
    currentStep -= 1;
  }
  console.log(currentStep);
  showCurrentStep();
});

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle('active', index === currentStep);
  });
}
