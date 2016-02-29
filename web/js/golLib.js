function GOL(boardDimensions, startObjectFunction) {
    this.color = {
        dead: "white",
        alive: "black"
    };

    if(typeof startObjectFunction !== "undefined"){
        this.initWithStartObjectFunction = startObjectFunction;
    } else {
        this.initWithStartObjectFunction = null;
    }


    this.realDimensions = boardDimensions;
    this.modelDimensions = {x: boardDimensions.x + 2, y: boardDimensions.y + 2};

    this.boardArray = [];

    this.countNeighbours = function (x, y) {
        var numberOfNeighbours = 0;
        for (var i = x - 1; i <= x + 1; i++) {
            for (var j = y - 1; j <= y + 1; j++) {
                if (!(i == x && j == y) && this.boardArray[i][j]) {
                    numberOfNeighbours++;
                }
            }
        }
        return numberOfNeighbours;
    };

    this.cellIsAliveInNextGeneration = function (i, j) {
        var cellIsAliveNextGeneration;
        var neighbourCount = this.countNeighbours(i, j);
        var cellIsAlive = this.boardArray[i][j];

        if (cellIsAlive) {
            switch (neighbourCount) {
                case 2:
                case 3:
                    cellIsAliveNextGeneration = true;
                    break;
                default:
                    cellIsAliveNextGeneration = false;
            }
        } else {
            switch (neighbourCount) {
                case 3:
                    cellIsAliveNextGeneration = true;
                    break;
                default :
                    cellIsAliveNextGeneration = false;
            }
        }
        return cellIsAliveNextGeneration;
    };

    this.calculateNextGeneration = function () {
        var nextGenerationArray = create2dArray(this.modelDimensions.x, this.modelDimensions.y, false);
        for (var i = 1; i < this.modelDimensions.x - 1; i++) {
            for (var j = 1; j < this.modelDimensions.y - 1; j++) {
                nextGenerationArray[i][j] = this.cellIsAliveInNextGeneration(i, j);
            }
        }
        return this.boardArray = nextGenerationArray;
    };

    this.getNextGeneration = function () {
        this.calculateNextGeneration();
        return this.boardArrayWithoutEdges();

    };


    this.init = function init() {
        //initialize PlayField with additional border which is dead.
        this.boardArray = create2dArray(this.modelDimensions.x, this.modelDimensions.y);
        //complete board is dead (dead = false)
        init2dArray(this.boardArray, false);
        if(this.initWithStartObjectFunction != null) {
            this.initWithStartObjectFunction(this);
        }
    };


    this.boardArrayWithoutEdges = function () {
        var array = create2dArray(boardDimensions.x, boardDimensions.y);
        for (var i = 0; i < boardDimensions.x; i++) {
            for (var j = 0; j < boardDimensions.y; j++) {
                array[i][j] = this.boardArray[i + 1][j + 1];
            }
        }
        return array;
    };

    this.setCellAlive = function(x,y) {
        this.boardArray[x][y] = true;
    };

    this.init();
}

function create2dArray(numberOfRows, numberOfColumns, initValue) {
    var array = new Array(numberOfRows);
    for (var i = 0; i < numberOfRows; i++) {
        array[i] = new Array(numberOfColumns);
    }
    if (typeof initValue !== "undefined") {
        init2dArray(array, false);
    }
    return array;
}

function init2dArray(array, initValue, edgeInitValue) {
    if (typeof edgeInitValue === 'undefined') {
        edgeInitValue = initValue;
    }

    for (var i = 0; i < array.length; i++) {
        var value;
        for (var j = 0; j < array[i].length; j++) {
            if (i == 0 || i == (array.length - 1) || j == 0 || j == (array[i].length - 1)) {
                value = edgeInitValue;
            } else {
                value = initValue;
            }
            array[i][j] = value;
        }
    }
}

