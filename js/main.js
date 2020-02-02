/*----- constants -----*/
let gamePieces = ["","","","","","","","",""]
const turnSequence = ['X','O','X','O','X','O','X','O','X']

/*----- app's state (variables) -----*/
let turnCounter = 0;
let usedPieces = [];
let checks = [];

/*----- cached element references -----*/
const gameBoardEl = document.querySelector('#game-board');
const h2El = document.querySelector('h1')
const replayBtn = document.querySelector('#replayBtn')
/*----- event listeners -----*/
replayBtn.addEventListener('click',gameReset)



gameBoardEl.addEventListener('click',function(event){
    let buttonId = event.target.getAttribute('data-id')
    if(checkForWinner() === true){
        
        return;
    }
    if(event.target.tagName !== 'LI'){
        return;
    }else if(isGameOVer()){
        console.log('Game is over')
        return;
    }
    else if(usedPieces.includes(buttonId)){
        return;
    }
    
    usedPieces.push(buttonId)
    gamePieces[buttonId] = turnSequence[turnCounter]
    console.log(turnCounter)
    console.log(buttonId,'clicked')
    
    event.target.textContent = turnSequence[turnCounter]
    event.target.style.backgroundColor = 'white'
    checkForWinner();
    return(turnCounter += 1);
   

    
    
});
/*----- functions -----*/
function gameReset(){
    ;
    turnCounter=0;
    gameBoardEl.innerHTML='';
    usedPieces = [];
    gamePieces = ["","","","","","","","",""];
    h2El.textContent = 'Goodluck!';
    !!checkForWinner();
    renderBoard();
    return checks = [];

};


function renderBoard(){
    gamePieces.forEach(function(piece,idx){
        gamePieceEl = document.createElement('li');
        gamePieceEl.setAttribute('data-id',idx);
        gamePieceEl.textContent = piece.textContent;
        gameBoardEl.style.backgroundColor='none'
        gameBoardEl.appendChild(gamePieceEl);
        
    })

}


function checkForWinner(){
    // if(turnCounter === 9){
    //     checks = [];
    //     return false;
    // }
    let checkOne = (gamePieces[0] + gamePieces[1] + gamePieces[2])
    let checkTwo = (gamePieces[3] + gamePieces[4] + gamePieces[5])
    let checkThree = (gamePieces[6] + gamePieces[7] + gamePieces[8])
    let checkFour = (gamePieces[0] + gamePieces[3] + gamePieces[6])
    let checkFive = (gamePieces[1] + gamePieces[4] + gamePieces[7])
    let checkSix = (gamePieces[2] + gamePieces[5] + gamePieces[8])
    let checkSeven = (gamePieces[0] + gamePieces[4] + gamePieces[8])
    let checkEight = (gamePieces[2] + gamePieces[4] + gamePieces[6])
    checks.push(checkOne)
    checks.push(checkTwo)
    checks.push(checkThree)
    checks.push(checkFour)
    checks.push(checkFive)
    checks.push(checkSix)
    checks.push(checkSeven)
    checks.push(checkEight)
    
    if(checks.includes('XXX')===true){
        h2El.textContent = 'Player X has Won!'
        checkOne = '';
        checkTwo = '';
        checkThree = '';
        checkFour = '';
        checkFive = '';
        checkSix = '';
        checkSeven = '';
        checkEight = '';
        checks = [];
        
        return true;
 
    }else if(checks.includes('OOO')===true){
        h2El.textContent = 'Player O has Won!'
        checkOne = '';
        checkTwo = '';
        checkThree = '';
        checkFour = '';
        checkFive = '';
        checkSix = '';
        checkSeven = '';
        checkEight = '';
        checks = [];
        
        
        return true;
    }else{
        return false;
    }
    return false;
    
    
    
    // if(checkOne === "XXX" || checkTwo === "XXX" ){
    //     console.log('WE HAVE A WINNER')
    // }
};


function isGameOVer(){
    if(turnCounter===9){
        return true;
    }
    else{
        return false;
    }
};
renderBoard();



// TO DO - Add replay button, display who's turn it is! 