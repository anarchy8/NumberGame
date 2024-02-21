const guessBox = document.getElementById("tahmin-box");
const input = document.getElementById("değer-gir");
const deneButon = document.getElementById("dene-btn");
const tahmintext = document.getElementById("tahmin-text");
const restartbtn = document.getElementById("restartbtn");
const sonucText = document.getElementById("sonuc-text");
const body = document.body;


let randomnum = Math.floor(Math.random()*10)+1;
console.log(randomnum);


const game = () =>{
   
  if(randomnum>input.value){
    sonucText.innerHTML = '<i class="bi bi-caret-down-fill"></i> too low'
    body.style.backgroundColor = "#FF0000";
    tahmintext.innerText = "Tahminin: "+input.value;
  }
  else if(randomnum<input.value){
    sonucText.innerHTML = '<i class="bi bi-caret-up-fill"></i> too high'
    body.style.backgroundColor = "#FF0000";
    tahmintext.innerText = "Tahminin: "+input.value;
  }
  else if(randomnum==input.value){
    sonucText.innerText = "BİLDİN!!!"
    body.style.backgroundColor =  "#00FF00"; 
    tahmintext.innerText = "Tahminin: "+input.value;
    guessBox.innerText = randomnum;
  }
  const restart = () =>{
    sonucText.innerText = "Yeni Sayı";
    body.style.backgroundColor = "#d0d0d0";
    tahmintext.innerText = "Tahminin: ";
    guessBox.innerText = "???";
    randomnumrestart = Math.floor(Math.random()*10)+1;
    randomnum = randomnumrestart;
  }

  restartbtn.addEventListener("click",restart)
   

}

deneButon.addEventListener("click",game);