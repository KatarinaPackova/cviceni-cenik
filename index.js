const selectPlan = (planNumber) => {
  document.querySelector('#plan1').classList.remove('plan--selected');
  document.querySelector('#plan2').classList.remove('plan--selected');
  document.querySelector('#plan3').classList.remove('plan--selected');

  const selectedPlan = document.querySelector(`#${planNumber}`);
  selectedPlan.classList.add('plan--selected');
};
selectPlan('plan3');
