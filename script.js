const multiStepForm = document.querySelector('[data-multi-step]');
const formSteps = [...multiStepForm.querySelectorAll('[data-step]')];

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains('active');
});

// console.log(currentStep);
if (currentStep < 0) {
  currentStep = 0;
  // formSteps[currentStep].classList.add('active');
  showCurrentStep();
}

multiStepForm.addEventListener('click', (e) => {
  let incrementor;
  if (e.target.matches('[data-next]')) {
    incrementor = 1;
  } else if (e.target.matches('[data-previous]')) {
    incrementor = -1;
  }

  if (incrementor == null) return;

  // console.log(currentStep);

  // I am actually confused why do I need to spread this, as querySelectorAll returns me a NodeList element.
  const inputs = [...formSteps[currentStep].querySelectorAll('input')];

  // When a field failed validation, you need to hover in the field to be able to see the default error message in chrome
  // Need to do it both way, not ideal. But if you only do it for next, not previous, then if there is fail validation in the current page, then user click previous and then next, they will never be able to go back to current page.
  const allValid = inputs.every((input) => input.reportValidity());
  if (allValid) {
    currentStep += incrementor;
    showCurrentStep();
  }
});

formSteps.forEach((step) => {
  step.addEventListener('animationend', (e) => {
    formSteps[currentStep].classList.remove('hide');
    e.target.classList.toggle('hide', !e.target.classList.contains('active'));
  });
});

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle('active', index === currentStep);
  });
}
