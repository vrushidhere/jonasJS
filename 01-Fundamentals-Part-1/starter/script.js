// const dolphineScore1 = 96;
// const dolphineScore2 = 108;
// const dolphineScore3 = 89;

// const koalasScrore1 = 88;
// const koalasScrore2 = 91;
// const koalasScrore3 = 110;

// const dolphineScore1 = 97;
// const dolphineScore2 = 112;
// const dolphineScore3 = 101;

// const koalasScrore1 = 109;
// const koalasScrore2 = 95;
// const koalasScrore3 = 103;

const dolphineScore1 = 101;
const dolphineScore2 = 101;
const dolphineScore3 = 101;

const koalasScrore1 = 101;
const koalasScrore2 = 101;
const koalasScrore3 = 101;

const dolphineAverageScrore = (dolphineScore1 + dolphineScore2 + dolphineScore3) / 3;
const koalasAverageScore = (koalasScrore1 + koalasScrore2 + koalasScrore3) / 3;

if (dolphineAverageScrore > koalasAverageScore && dolphineAverageScrore > 100) {
    console.log('dolhpne is winner!');
} else if (dolphineAverageScrore < koalasAverageScore && koalasAverageScore > 100) {
    console.log('Koalas is winner!');
} else if (dolphineAverageScrore === koalasAverageScore && dolphineAverageScrore > 100 && koalasAverageScore > 100) {
    console.log('Match is draw!');
}