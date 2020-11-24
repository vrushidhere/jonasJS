/*const marksWeight = 78;
const marksHeight = 1.69;

const johnsWeight = 92;
const johnsHeight = 1.95;*/

const marksWeight = 95;
const marksHeight = 1.88;

const johnsWeight = 85;
const johnsHeight = 1.76;

let marksBMI = marksWeight / (marksHeight ** 2);
let johnsBMI = johnsWeight / (johnsHeight ** 2);

let markHigherBMI = (marksBMI > johnsBMI);

console.log(markHigherBMI, marksBMI, johnsBMI);