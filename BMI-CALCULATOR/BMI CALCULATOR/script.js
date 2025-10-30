//Get inputs
const form = document.getElementById("myform");

//listen for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); //prevents page reload
  const weightInput = document.querySelector("#weight");
  //const weightInput = document.querySelector('#weight').value;
  const weight = parseFloat(weightInput.value);
  const heightInput = document.querySelector("#Height");
  const height = parseFloat(heightInput.value);
  const result = calculate_bmi(weight, height);
  know_bmi(result);
});

function calculate_bmi(weight, height) {
  const result = weight / (height * height);
  return result;
}


function know_bmi(result) {
  if (result < 18.5) {
    document.querySelector(
      ".bmi-result"
    ).textContent = `Your BMI is: ${result.toFixed(1)} - Underweight`;
  } else if (result >= 18.5 && result <= 24.9) {
    document.querySelector(
      ".bmi-result"
    ).textContent = `Your BMI is: ${result.toFixed(1)} - Healthy weight`;
  } else if (result >= 25 && result <= 29.9) {
    document.querySelector(
      ".bmi-result"
    ).textContent = `Your BMI is: ${result.toFixed(1)} - Overweight`;
  } else if (result >= 30) {
    document.querySelector(
      ".bmi-result"
    ).textContent = `Your BMI is: ${result.toFixed(1)} - Obese`;
  }
}


