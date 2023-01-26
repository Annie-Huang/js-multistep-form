const multiStepForm = document.querySelector('[data-multi-step]');
const formSteps = [...document.querySelectorAll('[data-step]')];

let currentStep = parseInt(
  formSteps.find((step) => step.classList.contains('active'))?.dataset.step
);

console.log(currentStep);
