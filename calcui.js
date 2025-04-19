var expression = "";
function append(value) {
    expression += value;
    updateDisplay();
}
function clearDisplay() {
    expression = "";
    updateDisplay();
}
function calculate() {
    expression = eval(expression).toString();
    updateDisplay();
}
function updateDisplay() {
    var display = document.getElementById("display");
    if (display) {
        display.value = expression;
    }
}
