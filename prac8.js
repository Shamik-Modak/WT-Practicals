function printMultiplication() {
    let num = prompt("Enter a number to print its multiplication table:");
    num = Number(num);

    if (isNaN(num) || num <= 0) {
        document.getElementById("output").innerHTML = "❌ Please enter a valid positive number.";
        return;
    }

    let result = `<h3>Multiplication Table of ${num}</h3>`;
    for (let i = 1; i <= 10; i++) {
        result += `${num} × ${i} = ${num * i}<br>`;
    }
    document.getElementById("output").innerHTML = result;
}

function sumNumbers() {
    let n = prompt("Enter a number to find the sum of first N natural numbers:");
    n = Number(n);

    if (isNaN(n) || n <= 0) {
        document.getElementById("output").innerHTML = "❌ Please enter a valid positive number.";
        return;
    }

    let i = 1, sum = 0;
    while (i <= n) {
        sum += i;
        i++;
    }

    document.getElementById("output").innerHTML = `<h3>Sum of first ${n} natural numbers = ${sum}</h3>`;
}