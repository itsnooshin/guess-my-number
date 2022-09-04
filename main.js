'use strict';
const elemnt = document.querySelector('.btn-secondary')
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// we should creat a secret Number for whole game 
//and we should write this variable outside of the event because we want to test all them
let score = 20;
const displayMessage = function(message){
    document.querySelector('.title__right-box').textContent = message; 
}

let highscore = 0
elemnt.addEventListener("click" , myFunction);
function myFunction(){
   const guess = Number(document.querySelector('.number-box').value) ;
   console.log( typeof guess , guess);
  
     
   if (!guess){
   
    displayMessage('⛔ No number') ;
   }
   else if(guess === secretNumber){
    // document.querySelector('.title__right-box').textContent =
    // '🎈 Correct Number';
    displayMessage('🎈 Correct Number');
    document.querySelector('body').style.background = 'green';
    document.querySelector('.number__question').textContent = guess;
    document.querySelector('.number__question').style.width = '150px'
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore
    }
    
   }
     else if(guess !== secretNumber){
        if( score > 0) {
            document.querySelector('.title__right-box').textContent =
            
            guess > secretNumber ? ' 📈Too High' : ' 📈 Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }
         else{
            document.querySelector('.title__right-box').textContent = '🤷‍♂️ sorry you lost the game' ;
         }
      
       }
     }

  
   
 
  

// again game

const againBtn = document.querySelector('.btn-primary')
againBtn.addEventListener('click' , againFunction);
function againFunction(){
    document.querySelector('body').style.background ='#222';
    document.querySelector('.title__right-box').textContent = 'Start guessing...';
    document.querySelector('.number__question').textContent =  '?';
    document.querySelector('.number-box').value = '';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.highscore').textContent = 0;
}