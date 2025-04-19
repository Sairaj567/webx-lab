let expression = "";

const display = document.getElementById("display") as HTMLInputElement;

const append = (val: string) => {
  expression += val;
  display.value = expression;
};

const clearDisplay = () => {
  expression = "";
  display.value = expression;
};

const calculate = () => {
  try { expression = eval(expression).toString(); } catch { expression = "Error"; }
  display.value = expression;
};
