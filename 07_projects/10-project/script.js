const input = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function checkInputValue() {
    const inputText = input.value.trim();

    if (!inputText) {
        alert("Please input a value");
        return;
    }

    const cleanText = inputText.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const reversedText = cleanText.split("").reverse().join("");

    result.innerText = cleanText === reversedText
        ? `${inputText} is a palindrome`
        : `${inputText} is not a palindrome`;
    input.value = ""
}

checkBtn.addEventListener("click", checkInputValue);
