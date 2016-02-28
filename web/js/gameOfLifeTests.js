function singleRandomCellTest(gameOfLifeInstace) {
    var randomX = Math.floor(Math.random() * gameOfLifeInstace.realDimensions.x + 1);
    var randomY = Math.floor(Math.random() * gameOfLifeInstace.realDimensions.y + 1);
    gameOfLifeInstace.boardArray[randomX][randomY] = true;
    console.log("cell [" + randomX + "," + randomY + "] is now alive!");
}

function blinkerTest(gameOfLifeInstace) {
    if (gameOfLifeInstace.realDimensions.x >= 3 && gameOfLifeInstace.realDimensions.y >= 3) {
        gameOfLifeInstace.setCellAlive(2, 1);
        gameOfLifeInstace.setCellAlive(2, 2);
        gameOfLifeInstace.setCellAlive(2, 3);
    }
}

function beaconTest(gameOfLifeInstace) {
    if (gameOfLifeInstace.realDimensions.x >= 4 && gameOfLifeInstace.realDimensions.y >= 4) {
        gameOfLifeInstace.setCellAlive(1, 1);
        gameOfLifeInstace.setCellAlive(1, 2);
        gameOfLifeInstace.setCellAlive(2, 1);
        gameOfLifeInstace.setCellAlive(3, 4);
        gameOfLifeInstace.setCellAlive(4, 3);
        gameOfLifeInstace.setCellAlive(4, 4);
    }
}

function toadTest(gameOfLifeInstace) {
    if (gameOfLifeInstace.realDimensions.x >= 4 && gameOfLifeInstace.realDimensions.y >= 4) {
        gameOfLifeInstace.setCellAlive(2, 2);
        gameOfLifeInstace.setCellAlive(2, 3);
        gameOfLifeInstace.setCellAlive(2, 4);
        gameOfLifeInstace.setCellAlive(3, 1);
        gameOfLifeInstace.setCellAlive(3, 2);
        gameOfLifeInstace.setCellAlive(3, 3);
    }
}

function pulsarTest(gameOfLifeInstace) {
    if (gameOfLifeInstace.realDimensions.x >= 15 && gameOfLifeInstace.realDimensions.y >= 15) {
        //zeilen
        gameOfLifeInstace.setCellAlive(2, 4);
        gameOfLifeInstace.setCellAlive(2, 5);
        gameOfLifeInstace.setCellAlive(2, 6);
        gameOfLifeInstace.setCellAlive(2, 10);
        gameOfLifeInstace.setCellAlive(2, 11);
        gameOfLifeInstace.setCellAlive(2, 12);

        gameOfLifeInstace.setCellAlive(7, 4);
        gameOfLifeInstace.setCellAlive(7, 5);
        gameOfLifeInstace.setCellAlive(7, 6);
        gameOfLifeInstace.setCellAlive(7, 10);
        gameOfLifeInstace.setCellAlive(7, 11);
        gameOfLifeInstace.setCellAlive(7, 12);

        gameOfLifeInstace.setCellAlive(9, 4);
        gameOfLifeInstace.setCellAlive(9, 5);
        gameOfLifeInstace.setCellAlive(9, 6);
        gameOfLifeInstace.setCellAlive(9, 10);
        gameOfLifeInstace.setCellAlive(9, 11);
        gameOfLifeInstace.setCellAlive(9, 12);

        gameOfLifeInstace.setCellAlive(14, 4);
        gameOfLifeInstace.setCellAlive(14, 5);
        gameOfLifeInstace.setCellAlive(14, 6);
        gameOfLifeInstace.setCellAlive(14, 10);
        gameOfLifeInstace.setCellAlive(14, 11);
        gameOfLifeInstace.setCellAlive(14, 12);

        //spalten
        gameOfLifeInstace.setCellAlive(4, 2);
        gameOfLifeInstace.setCellAlive(5, 2);
        gameOfLifeInstace.setCellAlive(6, 2);
        gameOfLifeInstace.setCellAlive(10, 2);
        gameOfLifeInstace.setCellAlive(11, 2);
        gameOfLifeInstace.setCellAlive(12, 2);

        gameOfLifeInstace.setCellAlive(4, 7);
        gameOfLifeInstace.setCellAlive(5, 7);
        gameOfLifeInstace.setCellAlive(6, 7);
        gameOfLifeInstace.setCellAlive(10, 7);
        gameOfLifeInstace.setCellAlive(11, 7);
        gameOfLifeInstace.setCellAlive(12, 7);

        gameOfLifeInstace.setCellAlive(4, 9);
        gameOfLifeInstace.setCellAlive(5, 9);
        gameOfLifeInstace.setCellAlive(6, 9);
        gameOfLifeInstace.setCellAlive(10, 9);
        gameOfLifeInstace.setCellAlive(11, 9);
        gameOfLifeInstace.setCellAlive(12, 9);

        gameOfLifeInstace.setCellAlive(4, 14);
        gameOfLifeInstace.setCellAlive(5, 14);
        gameOfLifeInstace.setCellAlive(6, 14);
        gameOfLifeInstace.setCellAlive(10, 14);
        gameOfLifeInstace.setCellAlive(11, 14);
        gameOfLifeInstace.setCellAlive(12, 14);


    }
}

function lightWeightSpaceShipTest(gameOfLifeInstace) {
    if (gameOfLifeInstace.realDimensions.x >= 5 && gameOfLifeInstace.realDimensions.y >= 4) {
        gameOfLifeInstace.setCellAlive(1, 1);
        gameOfLifeInstace.setCellAlive(1, 4);
        gameOfLifeInstace.setCellAlive(2, 5);
        gameOfLifeInstace.setCellAlive(3, 1);
        gameOfLifeInstace.setCellAlive(3, 5);
        gameOfLifeInstace.setCellAlive(4, 2);
        gameOfLifeInstace.setCellAlive(4, 3);
        gameOfLifeInstace.setCellAlive(4, 4);
        gameOfLifeInstace.setCellAlive(4, 5);

    }
}

function gliderTest(gameOfLifeInstace) {
    if (gameOfLifeInstace.realDimensions.x >= 3 && gameOfLifeInstace.realDimensions.y >= 3) {
        gameOfLifeInstace.setCellAlive(1, 2);
        gameOfLifeInstace.setCellAlive(2, 3);
        gameOfLifeInstace.setCellAlive(3, 1);
        gameOfLifeInstace.setCellAlive(3, 2);
        gameOfLifeInstace.setCellAlive(3, 3);

    }
}