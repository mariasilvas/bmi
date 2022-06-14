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

while (true) {
    var heightString = prompt(name + ", enter your height in meters").replace(',', '.');
    var height = parseFloat(heightString);
    if (heightString == height && height >= 1 && height < 3) {
        break;
    }
    alert('Invalid height, enter your height again!');
}

while (true) {
    var weightString = prompt(name + ", enter your weight in kilograms").replace(',', '.');
    var weight = parseFloat(weightString);
    if (weightString == weight && weight >= 40 && weight < 300) {
        break;
    }

    alert('Invalid weight, enter your weight again!');
}

var bmi = calculateBMI(height, weight);

write(name + ", your BMI is " + (Math.round(bmi * 100) / 100) + "kg/m²");

if (bmi < 18.5) {
    write("Your BMI is below recommendations.");
} else if (bmi <= 24.9) {
    write("Your BMI is excellent.");
} else if (bmi <= 29.9) {
    write("According to your BMI, you are overweight.");
} else {
    write("According to your BMI, you are obese.");
}
