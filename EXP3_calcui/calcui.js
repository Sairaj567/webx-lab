var expression = "";
var display = document.getElementById("display");
var append = function (val) {
    expression += val;
    display.value = expression;
};
var clearDisplay = function () {
    expression = "";
    display.value = expression;
};
var calculate = function () {
    expression = eval(expression).toString();
    display.value = expression;
};
