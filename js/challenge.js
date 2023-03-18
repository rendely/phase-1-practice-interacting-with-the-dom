window.addEventListener('DOMContentLoaded', startTimer)

let isTimerRunning = true;
let count = 0;


function startTimer() {

  setTimeout(() => {
    if (isTimerRunning) {
      startTimer();
      console.log('tick');
      count++;
      updateCounter(count);
    }
  }, 1000)
}

function updateCounter() {
  const counter = document.querySelector('#counter');
  counter.innerText = count;
}

const minusButton = document.querySelector('#minus');
const plusButton = document.querySelector('#plus');

minusButton.addEventListener('click', () => {
  console.log('minus', count);
  count--;
  updateCounter();
})

plusButton.addEventListener('click', () => {
  console.log('plus', count);
  count++;
  updateCounter();
})


const heartButton = document.querySelector('#heart');
const likesList = document.querySelector('.likes');
heartButton.addEventListener('click', ()=> {
  console.log('heart');
  // Check if that number has been liked before
  const likeCount = document.body.querySelector(`li[data-num="${count}"]`);
  console.log('like count:',likeCount)
  if (likeCount !== null){
    console.log('updating');
    likeNum = likeCount.querySelector('span');
    likeNum.innerText = parseInt(likeNum.innerText) + 1;
    // If not add a new div with the likes
  }else{
    newLikeCount = document.createElement('li');
    newLikeCount.innerHTML = `You liked ${count}: <span>1</span> times`;
    newLikeCount.setAttribute('data-num', count);
    likesList.appendChild(newLikeCount);
  }
})

const pauseButton = document.querySelector('#pause');

pauseButton.addEventListener('click', () => {
  console.log('pause');
  isTimerRunning = !isTimerRunning;
  minusButton.disabled = !minusButton.disabled;
  plusButton.disabled = !plusButton.disabled;
  if (isTimerRunning) {
    startTimer();
    pauseButton.innerText = 'pause';
  } else {
    pauseButton.innerText = 'resume';

  }
})


const commentForm = document.querySelector('form');
commentForm.addEventListener('submit',e =>{
  e.preventDefault();
  const commentList = document.querySelector('#list');
  newCommentText = commentForm['comment-input'].value;
  newCommentP = document.createElement('p');
  newCommentP.innerText = newCommentText;
  commentList.appendChild(newCommentP);
  commentForm['comment-input'].value = '';

})