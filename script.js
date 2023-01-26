const multiStepForm = document.querySelector('[data-multi-step]');
const formSteps = [...document.querySelectorAll('[data-step]')];

let currentStep = parseInt(
  formSteps.findIndex((step) => step.classList.contains('active'))
);

console.log(currentStep);
// if(isNaN(currentStep))
