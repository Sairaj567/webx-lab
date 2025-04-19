let expression = "";

function append(value: string): void {
  expression += value;
  updateDisplay();
}

function clearDisplay(): void {
  expression = "";
  updateDisplay();
}

function calculate(): void {
    expression = eval(expression).toString();
  updateDisplay();
}

function updateDisplay(): void {
  const display = document.getElementById("display") as HTMLInputElement;
  if (display) {
    display.value = expression;
  }
}
