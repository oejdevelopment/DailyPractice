function generateRange(min, max, step){
let diff = max - min;
let holdArr = [];
for (let i = min; i <= max; i += step){
    holdArr.push(i);
}
return holdArr;
}