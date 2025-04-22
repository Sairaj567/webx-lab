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
    try {
        expression = eval(expression).toString();
    }
    catch (_a) {
        expression = "Error";
    }
    display.value = expression;
};
