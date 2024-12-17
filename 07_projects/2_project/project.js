// const form = document.querySelector('form')

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
//     const results = document.querySelector('#result')

//     if (height < 0 || isNaN(height)) {
//         results.innerHTML = `Please give a valid height`
//     } else if (weight < 0 || isNaN(weight)) {
//         results.innerHTML = `Please give a valid weight`
//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         results.innerHTML = `<span>${bmi}</span>`
//     }

// })

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
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
        results.innerHTML = `<span>${bmi}</span>`;
        console.log(results);

    }
});


