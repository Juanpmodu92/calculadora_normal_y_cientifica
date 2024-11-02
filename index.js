function addScientificFunction(func) {
    const display = document.getElementById("display");
    display.value += func + "("; 
}

function addOperation(op) {
    const display = document.getElementById("display");
    display.value += " " + op + " ";
}

function addNumber(num) {
    const display = document.getElementById("display");
    display.value += num;
}

function addDecimal() {
    const display = document.getElementById("display");
    const lastEntry = display.value.split(" ").pop();
    if (!lastEntry.includes(".")) {
        display.value += ".";
    }
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

function toggleSign() {
    const display = document.getElementById("display");
    if (display.value.startsWith("-")) {
        display.value = display.value.substring(1);
    } else {
        display.value = "-" + display.value;
    }
}

function calculate() {
    const display = document.getElementById("display");
    try {
        let expression = display.value
            .replace(",", ".")
            .replace(/sin\(([^)]+)\)/g, "Math.sin($1)")
            .replace(/cos\(([^)]+)\)/g, "Math.cos($1)")
            .replace(/tan\(([^)]+)\)/g, "Math.tan($1)")
            .replace(/log\(([^)]+)\)/g, "Math.log10($1)")
            .replace(/sqrt\(([^)]+)\)/g, "Math.sqrt($1)")
            .replace(/exp\(([^)]+)\)/g, "Math.exp($1)");

        display.value = eval(expression); 
    } catch (e) {
        display.value = "Error";
    }
}

function addScientificFunction(func) {
    const display = document.getElementById("display");
    display.value += func + "("; 
}

function addParenthesis(paren) {
    const display = document.getElementById("display");
    display.value += paren;
}
