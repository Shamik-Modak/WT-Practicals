function showSelected() {
    let choice = document.getElementById("dialogue").value;

    if (choice === "alert") {
        alert("Welcome to the Web Technology Lab!");
    } 
    else if (choice === "confirm") {
        let result = confirm("Do you want to continue?");
        document.getElementById("msg").innerHTML = result 
            ? "User clicked OK." 
            : "User clicked Cancel.";
    } 
    else if (choice === "prompt") {
        let name = prompt("Enter your name:");
        document.getElementById("msg").innerHTML = name 
            ? `Hello, ${name}!` 
            : "You didn’t enter your name.";
    }
}