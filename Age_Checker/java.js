// Get references to the form, input field, and paragraph
const form = document.getElementById("ageForm");
const input = document.getElementById("inpu");
const para = document.getElementById("para");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const age = Number(input.value.trim());

    if (!input.value.trim()) {
        para.textContent = "Please enter your age!";
        para.style.color = "red";
    } else if (isNaN(age) || age < 0) {
        para.textContent = "Please enter a valid, non-negative number!";
        para.style.color = "red";
    } else if (age < 18) {
        para.textContent = "You are too young!";
        para.style.color = "#f59e42";
    } else if (age < 60) {
        para.textContent = "You are an adult!";
        para.style.color = "#4caf50";
    } else {
        para.textContent = "You are a senior citizen!";
        para.style.color = "#1976d2";
    }
});
