// 1. Given a number. Print “odd” if the number is odd and “even” if it’s even.
// zero is also Even number
function oddOrEven(number) {
    console.log(number % 2 === 0 ? "Even" : "Odd");
}


//2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
function isDivisibleByOtherOne(number1, number2) {
    console.log(number1 % number2 === 0 || number2 % number1 === 0 ? "1" : "0");
}


//3. Given two variables, which are the angles of a triangle. Find the third angle of the triangle.
function findThirdAngle(angle1, angle2) {
    return angle1 > 0 && angle2 > 0 ? 180 - (angle1 + angle2) : "Angle cannot be negative or 0";
}


//4. Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).
function numberTripling(number){
    console.log(number.toString() + (number * 2).toString() + (number * 3).toString());
}


//5. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number.
// If the last digit of the inserted number is 0, number remains the same.
// I used console.log as the part of task is Print the result, didn't want to add return so the code will be easy readable for you
function lastDigitToBeginning(number) {
    if (number % 10 === 0 || number <= 9) {
        console.log(number);
    } else {
        console.log((number % 10).toString() + (Math.floor(number / 10)).toString());
    }
}


//6. Given five numbers as input. Calculate and print the average of the numbers(without using arrays).
function averageOfFive(num1, num2, num3, num4, num5) {
    console.log((num1 + num2 + num3 + num4 + num5) / 5);
}


//7. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
// Arpi - considering that 0 is a multiple of every number
function multiple(number) {
    let result = "";
    let counter = 0;
    for (let i = 3; i < 8; i = i + 2) {
        if (number % i === 0) {
            counter++;
            switch (counter) {
                case 3:
                    result = "3, 5 and 7.";
                    break;
                case 2:
                    result = result + " and " + i;
                    break;
                default:
                    result = result + i;
                    break;
            }
        }
    }
    if (counter === 0) {
        console.log(`${number} is not a multiple of 3, 5 or 7.`);
        return;
    }
    console.log(`${number} is a multiple of ${result}`);
}


//8. Given an age, figure out whether someone is a baby(1 months - 12 months),
// toddler (1year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or
// adult(18 years and more ). Also check that age in months is between 1 and 12.
function ageRange(age, isYear) {
    let ageInMonths;

    if (!isYear && (age < 1 || age >= 13)) {
        console.log("Wrong months number");
        return;
    }

    ageInMonths = isYear ? age * 12 : age;

    if (ageInMonths < 0) {
        console.log("Age cannot be negative number");
        return;
    }

    if (ageInMonths >= 1 && ageInMonths < 13) {
        console.log("Baby");
        return;
    }

    if (ageInMonths >= 13 && ageInMonths < 36) {
        console.log("Toddler");
        return;
    }

    if (ageInMonths >= 36 && ageInMonths < 145) {
        console.log("Child");
        return;
    }

    if (ageInMonths >= 145 && ageInMonths < 216) {
        console.log("Teenager");
        return;
    }

    if (ageInMonths >= 216) {
        console.log("Adult");
    }
}


//9.Given three numbers. Sort them by the ascending order.
function sortAscending(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        if (num2 >= num3){
            return `${num3}, ${num2}, ${num1}`;
        } else {
            return `${num2}, ${num3}, ${num1}`;
        }
    } else if (num2 >= num1 && num2 >= num3){
        if (num1 >= num3) {
            return `${num3}, ${num1}, ${num2}`;
        } else {
            return `${num1}, ${num3}, ${num2}`;
        }
    } else if (num3 >= num1 && num3 >= num2){
        if (num1 >= num2){
            return `${num2}, ${num1}, ${num3}`;
        } else {
            return `${num1}, ${num2}, ${num3}`;
        }
    }
}


//10. Percentage marks obtained by a student in three exams are to be entered to a
// computer. An indication of Pass or Fail is given out after the three marks are entered.
// The criteria for passing are as follows:
//      a. A student passes if all three examinations are passed.
//      b. Additionally a student may pass if only one subject is failed but the overall
// average is greater than or equal to 50.
// The pass mark for an individual subject is 40.
function passOrFail(mark1, mark2, mark3) {
    if ((mark1 >= 40 && mark2 >= 40 || mark1 >= 40 && mark3 >= 40 || mark2 >= 40 && mark3 >= 40)
        && (mark1 + mark2 + mark3) / 3 >= 50){
        console.log("Passed");
    } else {
        console.log("Not Passed");
    }
}


//11. Find the sign of product of three numbers without multiplication operator. Display the specified sign.
function findSign(num1, num2, num3) {
    let counter = 0;
    
    if (num1 === 0 || num2 === 0 || num3 === 0) {
        console.log("unsigned");
        return;
    }
    
    if (num1 < 0 ) {
        counter++;
    }
    
    if (num2 < 0) {
        counter++;
    }
    
    if (num3 < 0) {
        counter++;
    }
    
    return counter % 2 === 0 ? console.log("+") : console.log("-");
}


//12. Input three numbers a, b, c respectively, where a is a non zero number and write a
// program to solve quadratic equations: . (Hint: use Math.pow or Math.sqrt).
function quadraticEquations(a, b, c) {
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    let x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b + Math.sqrt(discriminant)) / (2 * a);

    if (a === 0) {
        console.log("Enter valid constants.");
        return;
    }

    if (discriminant === 0) {
        console.log(`Solution is ${x1}.`);
    } else if (discriminant > 0) {
        console.log(`Solutions are ${x1} and ${x2}.`);
    } else {
        console.log("Solution does not exist.");
    }
}


//13. Given the following code rewrite it using only two if operators. (Hint: use logical operators).
var n = +prompt();

var i = 0;
var j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)){
        i += 1;
}
if (n % 3 === 0 && n % 10 === 1){
        j += 1;
}


//14. Insert a digit and a number. Check whether the digits contains in the number or not.
function numberAndDigit(digit, number) {
    let length = number.toString().length;
    do {
        if (number % 10 === digit) {
            return "Yes";
        } else {
            number = Math.floor(number / 10);
            length--;
        }
    } while (length > 0);
    return "No"
}


//15. Enter a number. Reverse its first and last digits. Print the new number.
function reverseDigits(number) {
    let numSign = "";
    if (number > -10 && number < 10) {
        console.log(number);
    } else {
        if (number < -10) {
            number = number.toString().substr(1);
            numSign = "-";
        }

        let last = (number % 10).toString();
        let first = (number.toString()).slice(0, 1);
        let between = (Math.floor(number / 10)).toString().substr(1);

        if (last === "0") {
            console.log("Number cannot start from 0")
        } else {
            console.log(numSign + last + between + first);
        }
    }
}


//17. Write a program which will compute the area of a rectangular or a triangle after
// prompting the user to type the name of the figure name. Also check that entered
// numbers are positive. For the triangle entered numbers are height and and base.
function squareOfTriangleRectangle(figureName, heightOrLength, baseOrWidth) {
    if (heightOrLength <= 0 || baseOrWidth <= 0) {
        console.log("Please enter only positives. ");
        return;
    }
    switch (figureName) {
        case "triangle":
            console.log((heightOrLength * baseOrWidth) / 2);
            break;
        case "rectangle":
            console.log(heightOrLength * baseOrWidth);
            break;
        default:
            console.log("Please enter 'triangle' or 'rectangle'.");
    }
}


//18. (***) Enter a number. Find the difference between its biggest and smallest digits.
function diffMaxMin(number) {
    number = Math.abs(number);
    let length = number.toString().length;
    if (number < 10) {
        console.log(0);
        return;
    }
    let minDigit = 9;
    let maxDigit = 0;
    while (length > 0) {
        let lastDigit = Math.floor(number % 10);
        minDigit = Math.min(lastDigit, minDigit);
        maxDigit = Math.max(lastDigit, maxDigit);
        number = Math.floor(number / 10);
        length--;
    }
    console.log(maxDigit - minDigit);
}
