 let score = JSON.parse(localStorage.getItem('score'));
if(score === null){
   score ={
      wins: 0,
      losses :0,
      ties :0
   };
}
updateScore();
let isAutoPlaying = false;
let IntervalId;

 function auto_play(){
   if(!isAutoPlaying){
   IntervalId = setInterval(function(){
      const playerMove = pickComputerMove();
      GiveResult(playerMove);
   },1000);
   document.querySelector('.js-auto').innerHTML = 'stop auto play';
   isAutoPlaying = true;
}else{
   clearInterval(IntervalId);
   isAutoPlaying = false;
   
   document.querySelector('.js-auto').innerHTML = 'Auto play';
   
}

 }

function GiveResult(playerMove){
const computerMove = pickComputerMove();
let result = '';
   if(playerMove === 'scissors'){
      if(computerMove === 'rock'){
      result = 'you loose';
      }else if(computerMove === 'paper'){
      result = 'you win';
      }else{
            result ='tie';
      }

      }
   else if(playerMove === 'paper'){
      if(computerMove === 'rock'){
      result = 'you win';
      }else if(computerMove === 'paper'){
      result = 'tie';
      }else{
            result ='you loose';
      }
    }

   else{
      if(computerMove === 'rock'){
      result ='tie';
      }else if(computerMove === 'paper'){
      result = 'you loose';
      }else{
            result = 'you win';
      }
   }
   if(result === 'you win'){
      score.wins++;
   }else if(result === 'you loose'){
      score.losses++;
   }else{
      score.ties++;
   }
   localStorage.setItem('score',JSON.stringify(score));
    updateScore();
    document.querySelector('.js-result').innerHTML = `${result}`;
    document.querySelector('.js-moves').innerHTML = `you
<img src="${playerMove}-emoji.png" alt="" class="move-icon">
<img src="${computerMove}-emoji.png" alt="" class="move-icon">
computer`;

}
function updateScore(){
document.querySelector('.js-score').innerHTML = `wins:${score.wins} ,losses: ${score.losses},ties: ${score.ties}`;
}
function pickComputerMove(){
let computerMove ='';
const randomMove = Math.random();
if(randomMove>=0  && randomMove <1/3){
   computerMove ='rock';
}else if(randomMove>=1/3  && randomMove<2/3){
   computerMove = 'paper';
}else{
   computerMove = 'scissors';
}
return computerMove;
}

