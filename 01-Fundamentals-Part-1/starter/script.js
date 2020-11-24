const marksWeight = 95;
const marksHeight = 1.88;

const johnsWeight = 85;
const johnsHeight = 1.76;

let marksBMI = marksWeight / (marksHeight ** 2);
let johnsBMI = johnsWeight / (johnsHeight ** 2);

if(marksBMI > johnsBMI){
    console.log(`Mark's BMI ${marksBMI} is higher than John's BMI ${johnsBMI}`);
} else {
    console.log(`Mark's BMI ${marksBMI} is lesser than John's BMI ${johnsBMI}`)
}
