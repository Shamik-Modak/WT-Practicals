function checkNumber() {

    let num = prompt("Enter a number:");
    num = Number(num);

    if (isNaN(num)) {
        alert("Please enter a valid number!");
        return;
    }
    if (num > 0) {
        alert(num + " is Positive.");
    } 
    else if (num < 0) {
        alert(num + " is Negative.");
    } 
    else {
        alert("The number is Zero.");
    }
}