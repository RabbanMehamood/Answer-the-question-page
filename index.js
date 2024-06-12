let questionsFormEl = document.getElementById("questionsForm");
let resultMsgEl = document.getElementById("resultMsg");
let submitBtnEl = document.getElementById("submitBtn");


questionsFormEl.addEventListener("submit", function() {
    event.preventDefault();
    if (event.target.value === "Delhi") {
        resultMsgEl.textContent = "Correct Answer";
    } else if (event.target.value === null) {
        resultMsgEl.textContent = "Please Select the answer";
    } else {
        resultMsgEl.textContent = "Wrong Answer";
    }
})
