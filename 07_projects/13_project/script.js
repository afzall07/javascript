const input = document.getElementById('user-input')
const checkBtn = document.getElementById('check-btn')
const clearBtn = document.getElementById('clear-btn')
const results = document.getElementById('results-div')

const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

checkBtn.addEventListener("click", () => {
    if (!input.value) {
        alert('Please provide a phone number');
        return;
    }

    if (phoneRegex.test(input.value)) {
        results.innerText = `Valid US number: ${input.value}`;
    } else {
        results.innerText = `Invalid US number: ${input.value}`;
    }
});

clearBtn.addEventListener("click", () => {
    results.innerText = "";
    input.value = "";
});
