
## Description 

A weather station provides a couple of daily temperatures (one representation the maximum temperature and the other the minimum temperature), temperatures cannot occur in nine (9) degrees, neither in the maximum, nor in the minimum, nor in both (it would be a error), the end of data is the sentinel value (maximum and minimum temperature in zero degrees). Obtain the average of the maximum and minimum temperatures, the percentage of error and the number of temperatures entered as valid temperatures.

## Usage

```Javascript

let Temperature=require("./Temperature").Temperature;
let WeatherStation=require("./WeatherStation").WeatherStation;

let arraytemperatures=[];

arraytemperatures.push(new Temperature(10,20));
arraytemperatures.push(new Temperature(20,30));
arraytemperatures.push(new Temperature(0,0));
arraytemperatures.push(new Temperature(9,8));
arraytemperatures.push(new Temperature(6,7));
arraytemperatures.push(new Temperature(15,18));
arraytemperatures.push(new Temperature(16,17));


let wstation=new WeatherStation(arraytemperatures);
let calc=wstation.calc_average();
console.log("The average of the maximum temperatures is: "+calc.avgmax);
console.log("The average of the minimum temperatures is: "+calc.avgmin);
console.log("The percentage of temperatures with error is: "+calc.percerror+" %");
console.log("The percentage of correct temperatures is: "+calc.percorrect+" %");
console.log("Correct temperatures: "+calc.correct);
console.log("Incorrect temperatures: "+calc.wrong);

```