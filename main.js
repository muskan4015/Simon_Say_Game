let gameseq=[];
let userseq=[];

let btns=["red","yellow","green","blue"];

let started=false;
let level=0;
let highestScore=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("Games Started");
    started=true;
    }
    levelup();
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    //random button choose
    let randomIndex= Math.floor(Math.random()*4);
    let randomColor=btns[randomIndex];
    let randomBtn=document.querySelector(`.${randomColor}`);
    // console.log(randomBtn);
    // console.log(randomColor);
    // console.log(randomIndex);
    gameseq.push(randomColor);
    console.log(gameseq);
    gameFlash(randomBtn);
}

function checkAns(index){
    // console.log("Current level:",level);

    if(userseq[index]==gameseq[index]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over!Your score was <b>${level}</b><br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="Red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);    

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    level=0;
    userseq=[];
    gameseq=[];
    started=false;
}