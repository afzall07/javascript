
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');
    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);
    const results = document.querySelector('#results');

    // Validate height
    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please give a valid height.`;
    }
    // Validate weight
    else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please give a valid weight.`;
    }
    // Calculate BMI
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.5) {
            results.innerHTML = ` Your bmi is ${bmi} Under Weight`
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            results.innerHTML = ` Your bmi is ${bmi} Normal`
        } else {
            results.innerHTML = ` Your bmi is ${bmi} Over Weight`
        }
        heightInput.value = ""
        weightInput.value = ""

    }
});


