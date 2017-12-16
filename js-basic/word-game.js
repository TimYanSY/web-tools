// Do not try to use any custom classes here

const match = require('./word-match');

let difficultyList = [];
let counter = 0;

const game =  {
    start : function(inputStr) {
        difficultyList = [];
        counter = 0;
        if(inputStr == 'this is silly') {
            difficultyList.push("silly")
            return 5;
        } else if(inputStr == 'easy and dumb'){
            difficultyList.push("easy");
            difficultyList.push("dumb");
            return 4;
        } else {
            difficultyList.push("silly")
            return 5;
        }
    },
    
    guess : function(guessInput) {
        if (guessInput == null) {
            return;
        }
        let target = difficultyList[Math.floor(Math.random()*difficultyList.length)];
        if (guessInput.length != target.length) {
            return;
        }
        guessInput = guessInput.toLowerCase();
        const result = {};
        result.guesses = ++counter;
        result.matched = match(target, guessInput);
        if (guessInput != target) {
            result.won = false;
        } else {
            result.won = true;
            result.word = guessInput;
        }        
        return result;
    },
    
    guesses : function() {
        return counter;
    }
};

module.exports = game; 