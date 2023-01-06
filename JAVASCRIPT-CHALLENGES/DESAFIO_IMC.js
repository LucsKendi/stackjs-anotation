const name = "Lucas";
const gender = "male";
const weight = 90;
const height = 1.72;

let calcImc = weight / (height * height);

if (calcImc >= 30) {
    console.log( name + ' está acima do peso.');
} else{
    console.log(name + ' não está acima do peso.');
}