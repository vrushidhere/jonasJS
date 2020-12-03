const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];

for (i = 0; i < listOfNeighbours.length; i++) {
    for ( y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`)
    }
}