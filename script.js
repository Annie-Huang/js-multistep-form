const multiStepForm = document.querySelector('[data-multi-step]');
const formSteps = [...document.querySelectorAll('[data-step]')];

let currentStep = parseInt(
  formSteps.findIndex((step) => step.classList.contains('active'))
);

// console.log(currentStep);
if (currentStep < 0) {
  currentStep = 0;
  formSteps[currentStep].classList.add('active');
}
