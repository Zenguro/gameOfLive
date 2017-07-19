var testFunctionMapping = {
  singleCell: singleRandomCell,
  blinker: blinker,
  beacon: beacon,
  toad: toad,
  pulsar: pulsar,
  lightWeightSpaceShip: lightWeightSpaceShip,
  glider: glider
};

function singleRandomCell(gameOfLifeInstance) {
  var randomX = Math.floor(Math.random() * gameOfLifeInstance.realDimensions.x + 1);
  var randomY = Math.floor(Math.random() * gameOfLifeInstance.realDimensions.y + 1);
  gameOfLifeInstance.boardArray[randomX][randomY] = true;
}

function blinker(gameOfLifeInstance) {
  if (gameOfLifeInstance.realDimensions.x >= 3 && gameOfLifeInstance.realDimensions.y >= 3) {
    gameOfLifeInstance.setCellAlive(2, 1);
    gameOfLifeInstance.setCellAlive(2, 2);
    gameOfLifeInstance.setCellAlive(2, 3);
  }
}

function beacon(gameOfLifeInstance) {
  if (gameOfLifeInstance.realDimensions.x >= 4 && gameOfLifeInstance.realDimensions.y >= 4) {
    gameOfLifeInstance.setCellAlive(1, 1);
    gameOfLifeInstance.setCellAlive(1, 2);
    gameOfLifeInstance.setCellAlive(2, 1);
    gameOfLifeInstance.setCellAlive(3, 4);
    gameOfLifeInstance.setCellAlive(4, 3);
    gameOfLifeInstance.setCellAlive(4, 4);
  }
}

function toad(gameOfLifeInstance) {
  if (gameOfLifeInstance.realDimensions.x >= 4 && gameOfLifeInstance.realDimensions.y >= 4) {
    gameOfLifeInstance.setCellAlive(2, 2);
    gameOfLifeInstance.setCellAlive(2, 3);
    gameOfLifeInstance.setCellAlive(2, 4);
    gameOfLifeInstance.setCellAlive(3, 1);
    gameOfLifeInstance.setCellAlive(3, 2);
    gameOfLifeInstance.setCellAlive(3, 3);
  }
}

function pulsar(gameOfLifeInstance) {
  if (gameOfLifeInstance.realDimensions.x >= 15 && gameOfLifeInstance.realDimensions.y >= 15) {
    //zeilen
    gameOfLifeInstance.setCellAlive(2, 4);
    gameOfLifeInstance.setCellAlive(2, 5);
    gameOfLifeInstance.setCellAlive(2, 6);
    gameOfLifeInstance.setCellAlive(2, 10);
    gameOfLifeInstance.setCellAlive(2, 11);
    gameOfLifeInstance.setCellAlive(2, 12);

    gameOfLifeInstance.setCellAlive(7, 4);
    gameOfLifeInstance.setCellAlive(7, 5);
    gameOfLifeInstance.setCellAlive(7, 6);
    gameOfLifeInstance.setCellAlive(7, 10);
    gameOfLifeInstance.setCellAlive(7, 11);
    gameOfLifeInstance.setCellAlive(7, 12);

    gameOfLifeInstance.setCellAlive(9, 4);
    gameOfLifeInstance.setCellAlive(9, 5);
    gameOfLifeInstance.setCellAlive(9, 6);
    gameOfLifeInstance.setCellAlive(9, 10);
    gameOfLifeInstance.setCellAlive(9, 11);
    gameOfLifeInstance.setCellAlive(9, 12);

    gameOfLifeInstance.setCellAlive(14, 4);
    gameOfLifeInstance.setCellAlive(14, 5);
    gameOfLifeInstance.setCellAlive(14, 6);
    gameOfLifeInstance.setCellAlive(14, 10);
    gameOfLifeInstance.setCellAlive(14, 11);
    gameOfLifeInstance.setCellAlive(14, 12);

    //spalten
    gameOfLifeInstance.setCellAlive(4, 2);
    gameOfLifeInstance.setCellAlive(5, 2);
    gameOfLifeInstance.setCellAlive(6, 2);
    gameOfLifeInstance.setCellAlive(10, 2);
    gameOfLifeInstance.setCellAlive(11, 2);
    gameOfLifeInstance.setCellAlive(12, 2);

    gameOfLifeInstance.setCellAlive(4, 7);
    gameOfLifeInstance.setCellAlive(5, 7);
    gameOfLifeInstance.setCellAlive(6, 7);
    gameOfLifeInstance.setCellAlive(10, 7);
    gameOfLifeInstance.setCellAlive(11, 7);
    gameOfLifeInstance.setCellAlive(12, 7);

    gameOfLifeInstance.setCellAlive(4, 9);
    gameOfLifeInstance.setCellAlive(5, 9);
    gameOfLifeInstance.setCellAlive(6, 9);
    gameOfLifeInstance.setCellAlive(10, 9);
    gameOfLifeInstance.setCellAlive(11, 9);
    gameOfLifeInstance.setCellAlive(12, 9);

    gameOfLifeInstance.setCellAlive(4, 14);
    gameOfLifeInstance.setCellAlive(5, 14);
    gameOfLifeInstance.setCellAlive(6, 14);
    gameOfLifeInstance.setCellAlive(10, 14);
    gameOfLifeInstance.setCellAlive(11, 14);
    gameOfLifeInstance.setCellAlive(12, 14);


  }
}

function lightWeightSpaceShip(gameOfLifeInstance) {
  if (gameOfLifeInstance.realDimensions.x >= 5 && gameOfLifeInstance.realDimensions.y >= 4) {
    gameOfLifeInstance.setCellAlive(1, 1);
    gameOfLifeInstance.setCellAlive(1, 4);
    gameOfLifeInstance.setCellAlive(2, 5);
    gameOfLifeInstance.setCellAlive(3, 1);
    gameOfLifeInstance.setCellAlive(3, 5);
    gameOfLifeInstance.setCellAlive(4, 2);
    gameOfLifeInstance.setCellAlive(4, 3);
    gameOfLifeInstance.setCellAlive(4, 4);
    gameOfLifeInstance.setCellAlive(4, 5);

  }
}

function glider(gameOfLifeInstance) {
  if (gameOfLifeInstance.realDimensions.x >= 3 && gameOfLifeInstance.realDimensions.y >= 3) {
    gameOfLifeInstance.setCellAlive(1, 2);
    gameOfLifeInstance.setCellAlive(2, 3);
    gameOfLifeInstance.setCellAlive(3, 1);
    gameOfLifeInstance.setCellAlive(3, 2);
    gameOfLifeInstance.setCellAlive(3, 3);

  }
}