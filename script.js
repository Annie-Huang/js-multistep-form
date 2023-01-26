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
  let incrementor;
  if (e.target.matches('[data-next]')) {
    incrementor += 1;
  } else if (e.target.matches('[data-previous]')) {
    incrementor -= 1;
  }

  if (incrementor == null) return;

  // console.log(currentStep);
  const inputs = formSteps[currentStep].querySelectorAll('input');
  const allValid = inputs.some((input) => input.checkValidity());
  if (allValid) {
    showCurrentStep();
  }
});

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle('active', index === currentStep);
  });
}
