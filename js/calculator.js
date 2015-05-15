//Getting all numbers from page
var keys = document.querySelectorAll(".calculator span");

//Operations the calculator performs
var ops = ["+", "-", "x", "÷"];

//Adding on click event to all keys
for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function (e) {
        //Getting screen value
        var screen = document.querySelector(".screen");
        var input = screen.innerHTML;

        //Getting user input
        var button = this.innerHTML;

        //Handling user inputs
        //Clearing screen if clear key is pressed
        if (button === "C") {
            screen.innerHTML = "";
        } else if (button === "=") { //if '=' key is press calculate and display result
            //Equation to be used for calculating result
            var eqn = input;

            //Last character of on-screen value
            var last = eqn[eqn.length - 1];

            //Remove operator or decimal if its the last char
            if (ops.indexOf(last) > -1 || last === ".") {
                eqn = eqn.slice(0, -1);
            }

            //Replace x and ÷ with * and /
            eqn = eqn.replace(/x/g, "*").replace(/÷/g, "/");

            //Evaluating user input
            if (eqn) {
                screen.innerHTML = eval(eqn);
            }
        } else if (ops.indexOf(button) > -1) {  //Making sure operators are added correctly.
            //Allow '-' if screen is empty
            if (input === "" && button === "-") {
                screen.innerHTML += button;
            }

            //Last character of on-screen value
            var last = input[input.length - 1];
            //In case user tries to enter 2 operators consecutively, use latest input
            if (input.length > 1 && ops.indexOf(last) > -1) {
                screen.innerHTML = input.slice(0, -1);
                screen.innerHTML += button;
            }

            //Appending operator in normal cases
            if (input !== "" && ops.indexOf(last) === -1) {
                screen.innerHTML += button;
            }
        } else if (button === ".") {    //Making sure decimal point is only added once
            if (input.indexOf(".") === -1) {
                screen.innerHTML += button;
            }
        } else {    //Append all other values to screen
            screen.innerHTML += button;
        }
    };
}

