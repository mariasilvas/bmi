function write(text) {
    result.innerText = text;
}

function calculateBMI(height, weight) {
    var name = ipt_name.value;

    var heightString = ipt_height.value.replace(',', '.');
    var height = parseFloat(heightString);
    if (heightString != height || height < 1 || height > 3) {
        alert('Invalid height, enter your height again!');
        return;
    }

    var weightString = ipt_weight.value.replace(',', '.');
    var weight = parseFloat(weightString);
    if (weightString != weight || weight < 35 || weight > 300) {
        alert('Invalid weight, enter your weight again!');
        return;
    }

    var bmi = weight / (height * height);

    var message = name + ", your BMI is " + (Math.round(bmi * 100) / 100) + "kg/m². ";

    if (bmi < 18.5) {
        write(message + "Your BMI is below recommendations.");
    } else if (bmi <= 24.9) {
        write(message + "Your BMI is excellent.");
    } else if (bmi <= 29.9) {
        write(message + "According to your BMI, you are overweight.");
    } else {
        write(message + "According to your BMI, you are obese.");
    }

}
