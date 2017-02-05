class TicTacToe {
    constructor() {
        this._gameField = [];
        for(let i =0; i < 3; i++){
            this._gameField.push(new Array());
            for(let j = 0; j < 3; j++){
                this._gameField[i][j] = "";
            }
        }
        this._currentPlayer = 'x';

    }

    getCurrentPlayerSymbol() {
        return this._currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {

        const checkWinnerAfterTurn = (rowIndex, colIndex) => {
            const  turn = this._gameField[rowIndex][colIndex];
            if (this._gameField[rowIndex][0] == turn && this._gameField[rowIndex][0] == this._gameField[rowIndex][1] && this._gameField[rowIndex][1] == this._gameField[rowIndex][2]) {
                 this._winner = turn; //// проверка строки
            }else if (this._gameField[0][colIndex] == turn && this._gameField[0][colIndex] == this._gameField[1][colIndex] && this._gameField[1][colIndex] == this._gameField[2][colIndex]) {
                this._winner = turn; //// проверка столбца
            }else {
                if(rowIndex == colIndex || Math.abs(rowIndex - colIndex) == 2){
                    if (this._gameField[0][0] == turn && this._gameField[0][0] == this._gameField[1][1] && this._gameField[1][1] == this._gameField[2][2]){
                        this._winner =  turn; // главная диагональ
                    }
                    if (this._gameField[0][2] == turn && this._gameField[0][2] == this._gameField[1][1] && this._gameField[1][1] == this._gameField[2][0]){
                        this._winner = turn; // вторая диагональ
                    } 
                }
            }   
        }
        if (this._gameField[rowIndex][columnIndex] == "") {
            this._gameField[rowIndex][columnIndex] = this._currentPlayer;
            checkWinnerAfterTurn(rowIndex, columnIndex);
            (this._currentPlayer == 'x') ? this._currentPlayer = 'o' : this._currentPlayer = 'x';
        }
    }
    isFinished() {
        if (!!this._winner) return true;
        else return this.noMoreTurns();
    }

    getWinner() {
        return this._winner || null;
        }

    noMoreTurns() {
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if (this._gameField[i][j] == "") return false; 
            }
        }
        return true;
    }

    isDraw() {
        if (!!this._winner) return false;
        else return this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
        return (!(this._gameField[rowIndex][colIndex] == "")) ? this._gameField[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;
