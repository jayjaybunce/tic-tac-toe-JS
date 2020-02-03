// const COLORS = [
//     {color: 'Red', colorHexCode:'#ff0000'},
//     {color: 'Blue', colorHexCode:'#0000ff'},
//     {color: 'Maroon',colorHexCode:'#800000'},
//     {color: 'Brown',colorHexCode:'#9a6324'},
//     {color: 'Olive',colorHexCode:'#808000'},
//     {color: 'Orange',colorHexCode:'#f58231'},
//     {color: 'Pink',colorHexCode:'#ffd8b1'},
//     {color: 'Beige',colorHexCode:'#fffac8'},
//     {color: 'Green',colorHexCode:'#3cb44b'},
//     {color: 'Cyan',colorHexCode:'#46f0f0'},
//     {color: 'Purple',colorHexCode:'#911eb4'},
//     {color: 'Magenta',colorHexCode:'#f032e6'},
//     {color: 'Lavender',colorHexCode:'#e6beff'},
//     {color: 'White',colorHexCode:'#ffffff'},
//     {color: 'Mint',colorHexCode:'#aaffc3'},
//     {color: 'Black',colorHexCode:'#000000'},
    
// ]



// /*----- constants -----*/
// /*----- app's state (variables) -----*/
// let themeElStyle;
// /*----- cached element references -----*/
// const themeButtonEl = document.querySelector('#theme-header')
// const themeControllerWrapperEl = document.querySelector('#theme-controller-wrapper')
// const bgControllerWrapperEl = document.querySelector('#bg-controller-wrapper')
// const bodyEl = document.querySelector('body')

// /*----- event listeners -----*/
// themeButtonEl.addEventListener('click',function(event){
//     let checkHidden = themeControllerWrapperEl.style.visibility
    
//      if(checkHidden === 'hidden'){
//         themeControllerWrapperEl.style.visibility = 'visible'
        
//      }else{
//         themeControllerWrapperEl.style.visibility = 'hidden' 
//      }
// })

// bgControllerWrapperEl.addEventListener('click',function(event){
//     console.log(event.target.tagName)
//     if(event.target.tagName !== "BUTTON"){
//         return;
//     }else{
//         bodyEl.style.backgroundColor = event.target.getAttribute('data-id')
//     }
// })



// /*----- functions -----*/
// function createThemeBgButtons(){
//     COLORS.forEach(element => {
//        bgButtonEl = document.createElement('button');
//        bgButtonEl.textContent = element.color
//        bgButtonEl.setAttribute('data-id',element.colorHexCode)
//        bgControllerWrapperEl.appendChild(bgButtonEl)

//     });
// };


// createThemeBgButtons();
