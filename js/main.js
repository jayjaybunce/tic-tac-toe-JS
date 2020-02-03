/*----- constants -----*/
let gamePieces = ["","","","","","","","",""]
const turnSequence = ['X','O','X','O','X','O','X','O','X','O','X']
const COLORS = [
    {color: 'Red', colorHexCode:'#ff0000'},
    {color: 'Blue', colorHexCode:'#0000ff'},
    {color: 'Maroon',colorHexCode:'#800000'},
    {color: 'Brown',colorHexCode:'#9a6324'},
    {color: 'Olive',colorHexCode:'#808000'},
    {color: 'Orange',colorHexCode:'#f58231'},
    {color: 'Pink',colorHexCode:'#ffd8b1'},
    {color: 'Beige',colorHexCode:'#fffac8'},
    {color: 'Green',colorHexCode:'#3cb44b'},
    {color: 'Cyan',colorHexCode:'#46f0f0'},
    {color: 'Purple',colorHexCode:'#911eb4'},
    {color: 'Magenta',colorHexCode:'#f032e6'},
    {color: 'Lavender',colorHexCode:'#e6beff'},
    {color: 'White',colorHexCode:'#ffffff'},
    {color: 'Mint',colorHexCode:'#aaffc3'},
    {color: 'Black',colorHexCode:'#000000'},
    
]
const PLAYER_SYMBOLS = ['☺','♨','➑','☆','★','♡','❤','✈','✂','✄','♕','✝','◑',
'♪','♫','✣','✪','✰','✧','✦','☑','✔','✘','✎','✍','♀','♂','☎','☏','✉','✆','←','→','↑','↓','↔','↔','↕','⇄','⇅',
'↲','↳','↱','⇤','↶','↷','↺','↺'
]
/*----- app's state (variables) -----*/
let turnCounter = 0;
let usedPieces = [];
let checks = [];
let themeElStyle;

/*----- cached element references -----*/
const gameBoardEl = document.querySelector('#game-board');
const h2El = document.querySelector('h1')
const replayBtn = document.querySelector('#replayBtn')
const themeButtonEl = document.querySelector('#theme-header')
const themeControllerWrapperEl = document.querySelector('#theme-controller-wrapper')
const bgControllerWrapperEl = document.querySelector('#bg-controller-wrapper')
const bodyEl = document.querySelector('body')
const headerControllerWrapperEl = document.querySelector('#head-controller-wrapper')
const headerEl = document.querySelector('header')
const turnEl = document.querySelector('#current-turn')
/*----- event listeners -----*/
themeButtonEl.addEventListener('click',function(event){
    let checkHidden = themeControllerWrapperEl.style.visibility
    
     if(checkHidden === 'hidden'){
        themeControllerWrapperEl.style.visibility = 'visible'
        themeButtonEl.textContent = 'Themes <'
        return;
        
     }else{
        themeControllerWrapperEl.style.visibility = 'hidden' 
        themeButtonEl.textContent = 'Themes >'
        return;
     }
})

bgControllerWrapperEl.addEventListener('click',function(event){
    console.log(event.target.tagName)
    if(event.target.tagName !== "BUTTON"){
        return;
    }else{
        bodyEl.style.backgroundColor = event.target.getAttribute('data-id')
    }
})

headerControllerWrapperEl.addEventListener('click',function(event){
    console.log(event.target.tagName)
    if(event.target.tagName !== "BUTTON"){
        return;
    }else{
        headerEl.style.backgroundColor = event.target.getAttribute('data-id')
    }
})


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
    turnSetter();
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
    turnEl.textContent = `Player X goes next`
    !!checkForWinner();
    renderBoard();
    return checks = [];

};
function turnSetter(){
    let currentTurn = turnSequence[turnCounter+1];
    turnEl.textContent = `Player ${currentTurn} goes next`
};
function createThemeBgButtons(){
    COLORS.forEach(element => {
       bgButtonEl = document.createElement('button');
       bgButtonEl.textContent = element.color
       bgButtonEl.setAttribute('data-id',element.colorHexCode)
       bgButtonEl.setAttribute('class','theme-controller-button')
       bgControllerWrapperEl.appendChild(bgButtonEl)
       bgButtonSwatchEl = document.createElement('div')
       bgButtonSwatchEl.setAttribute('class','color-swatch')
       bgButtonSwatchEl.style.backgroundColor = element.colorHexCode;
       bgControllerWrapperEl.appendChild(bgButtonSwatchEl)

    });
};
function createThemeHeadBgButtons(){
    COLORS.forEach(element => {
       bgButtonEl = document.createElement('button');
       bgButtonEl.textContent = element.color
       bgButtonEl.setAttribute('data-id',element.colorHexCode)
       bgButtonEl.setAttribute('class','theme-controller-button')
       headerControllerWrapperEl.appendChild(bgButtonEl)
       bgButtonSwatchEl = document.createElement('div')
       bgButtonSwatchEl.setAttribute('class','color-swatch')
       bgButtonSwatchEl.style.backgroundColor = element.colorHexCode;
       headerControllerWrapperEl.appendChild(bgButtonSwatchEl)

    });
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



// --------------- FUNCTION EXECUTION BELOW -------- //

themeControllerWrapperEl.style.visibility = 'hidden';
renderBoard();
createThemeBgButtons();
createThemeHeadBgButtons();

// TO DO - Add replay button, display who's turn it is! 