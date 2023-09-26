const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateButton = document.getElementById('calculateButton');
const resultElement = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const bmiCategory = countBMI(weight, height);
  resultElement.textContent = `BMI Category: ${bmiCategory}`;
});

function countBMI(weight, height) {
  var bmi = weight / (height * height);

  if (bmi < 18.5) {
    return 'Niedowaga';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Waga normalna';
  } else if (bmi >= 25 && bmi < 30) {
    return 'Nadwaga';
  } else if (bmi >= 30) {
    return 'Otyłość';
  }

  return bmi;
}
