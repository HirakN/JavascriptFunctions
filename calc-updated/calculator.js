var add = function(v1, v2) {
    alert(v1 + v2);
}

add(1, 10);

var calcType = prompt("Enter a calculator option from normal, bmi and mortgage: ");
var exit_flag = "n";

while (exit_flag === "y") {
    if(calcType == "normal") {
        // Calculator
        var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (r)oot (p)ower') || "a";

        if(choice == "a" || choice == "s" || choice == "m" || choice == "d") {
            var value1 = parseFloat(prompt('Enter first value')); 
            var value2 = parseFloat(prompt('Enter the second value'));
        } else if (choice == "r") {
            var value1 = parseFloat(prompt("Enter value"));
        } else if (choice == "p") {
            var value1 = parseFloat(prompt("Enter base"));
            var value2 = parseFloat(prompt("Enter power"));
        }

        switch (choice) {
            case "a":
                add(value1, value2);
                break;
            case "s":
                sub(value1, value2);
            case "m":
                mul(value1, value2);
                break;
            case "d":
                div(value1, value2);
                break;
            case "r":
                root(value1);
                break;
            case "p": 
                pow(value1, value2);

            default:
                alert("Please enter a, s, m, d ,r or p");
       	}
    } else if(calcType == "bmi"){
        //BMI Calc
        var weight = parseFloat(prompt("Enter your mass in kg: "));
        var height = parseFloat(prompt("Enter your height in m: "));
        bmi(weight, height);
    } else if (calcType == "mortgage"){
    	var loan = parseFloat(prompt("Enter loan taken out: "));
    	var monthlyInterest = parseFloat(prompt("Enter interest rate: "));
    	monthlyInterest = monthlyInterest/12;
    	var loanPeriod = parseInt(prompt("Enter number of months to repay loan: "));
    	mort(loan, monthlyInterest, loanPeriod);
    } else {
        alert("Acceptable inputs are: BMI, normal or mortgage");
    }

    exit_flag = prompt ("Do you want to go again? y/n?: ")
}

function sub(v1, v2) {
    alert(vl - v2);
}

function mul(v1, v2) {
    alert(value1 * value2);
}

function div(v1, v2) {
    alert(v1/v2);
}

function root(v1) {
    alert(Math.sqrt(v1));
}

function pow(v1, v2) {
    alert(Math.pow(v1, v2));
}

function bmi(w, h) {
    var BMI = w / (h*h);
    alert("This is your BMI: " + BMI);
}

function mort(L, c, n) {
    var topRow = c * Math.pow((1 + c), n);
    console.log(topRow);
    var botRow = Math.pow((1 + c), n) - 1;
    console.log(botRow);
    var result = loan * (topRow/botRow);
    alert(results);
}