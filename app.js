console.log("run")
let randomNum;
let turn = '0';
randomNumber();
let myVal;
let secretcover = document.getElementById('secret-cover')
let loseMain = document.getElementById('lose-main')
let winMain = document.getElementById('win-main')
let result = document.getElementById('res')
let secretN = document.getElementById('secret-bg')
let inpGuess = document.getElementById('inp');
let turnId = document.getElementById('turnId');
let submit = document.getElementById("btnSubmit");
let textSecret = document.getElementById("text-win");
let textSecretlose = document.getElementById("text-lose");
let restart = document.getElementById("btnRestart");
let btnPlayAgain = document.getElementById("btnPlayAgain");
let btnPlayAgain1 = document.getElementById("btnPlayAgain1");
let form = document.getElementById('form').getElementsByTagName('*');


submit.addEventListener("click", () => {
    myVal= inpGuess.value;
    guessTheNumber(myVal)
    ShowGuess(myVal);
    console.log(myVal)
});
winMain.style.display='none'
loseMain.style.display='none'
restart.addEventListener("click", () => {
   localStorage.clear()
   location.reload()
});
btnPlayAgain1.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
 });
btnPlayAgain.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
 });
let guessObj=[]
let myValue;
function ShowGuess(myVal) {
     myValue = `${myVal}`
    let guessResult = document.getElementById('guess-result');
    let myGuess = localStorage.getItem('myGuess');
    console.log(myGuess);
    if (myGuess == null) {
        guessObj = [];
    }
    else {
        guessObj = JSON.parse(myGuess);
    }
    if(!(myVal>100)&&myVal!=''&&myVal!=String){
        guessObj.push(myValue);
    }
    
    localStorage.setItem('myGuess', JSON.stringify(guessObj));

    let html = "";
    guessObj.forEach((guess, index) => {
        html += `<div class="guess-result" id="guess-result">
                    <div class="guess-container">
                         <div class="guess-num">Turn:${index+1}</div>
                        <div class="guess">Your Guess was: ${guess}</div>
                    </div>
                    <div>
                    </div>
                </div>`
    });
    console.log(guessObj);

    if (guessObj.length != 0) {
        guessResult.innerHTML = html;
    }
    else {
        guessResult.innerHTML = ``;
    }
}


function guessTheNumber(myVal){
    console.log(randomNum)
if (myVal > 100) {
    alert("ENTER Guess Less Than 100")
    result.innerText = ''
    console.log(randomNum)
}

else if (randomNum == myVal) {
    // console.log(myVal)
    // console.log(randomNum)
    result.innerText = "Congratsss...!! Your Guess Is Right"
    winMain.style.display='block'
    secretcover.style.display='none'
    secretN.innerText = randomNum;
    textSecret.innerText =`SECRET NUMBER IS ${randomNum}`;
    
    for(let i=0;i<form.length;i++){
        form[i].disabled=true;
    }
    turn++
    turnId.innerText = `Turn ${turn}/15`;
    // alert('You Want to play again??')
}


else if (myVal === '') {
    alert('Enter Guess Number')
    result.innerText = ''
}

else if (myVal < randomNum) {
    result.innerText = "WRONG GUESS, Your Guess is LESS Than Secret Number TRY AGAIN"
    turn++
    turnId.innerText =`Turn ${turn}/15`;
    console.log('rnum' + randomNum)
}
else if (myVal > randomNum) {
    result.innerText = "WRONG GUESS, Your Guess is GREATER Than Secret Number TRY AGAIN"
    turn++
    turnId.innerText = `Turn ${turn}/15`;
}


if (turn == '15') {
    result.innerText = "YOU LOSS,Your Turn is Completed"
    loseMain.style.display='block'
    secretN.innerText = randomNum;
    textSecretlose.innerText =`SECRET NUMBER IS ${randomNum}`;
    for(let i=0;i<form.length;i++){
        form[i].disabled=true;
    }
}
inpGuess.value = '';

console.log(turn);
}

function randomNumber() {
    randomNum = Math.floor(Math.random() * 100);
    console.log(randomNum)
}