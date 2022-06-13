function breakLine() {
    document.write("<br>");
    document.write("<br>");
}

function write(text) {
    document.write(text);
    breakLine();
}

function calculateBMI(height, weight) {
    return weight / (height * height);
}

var name = prompt("Inform your name");
var height = prompt(name + ", enter your height in meters");
var weight = prompt(name + ", enter your weight in kilograms");
var bmi = calculateBMI(height, weight);

write(name + ", your BMI is " + bmi);

if (bmi < 18.5) {
    write("Your BMI is below recommendations.");
}

if (bmi >= 18.5 && bmi <= 24.9) {
    write("Your BMI is excellent.");
}

if (bmi >= 25 && bmi <= 29.9) {
    write("According to your BMI, you are overweight.");
}

if (bmi > 30) {
    write("According to your BMI, you are obese.");
}