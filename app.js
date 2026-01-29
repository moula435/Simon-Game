let gameSeq=[];
let userSeq=[];
let btns=["red","green","blue","orange"];
let started=false;
let level=0;
let maxScore=0;
let h2=document.querySelector("h2");
document.addEventListener('keypress',function(){
    if(started==false){
        console.log("Game started");
        started=true;
        levelUp();
    }

    
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranIdx=Math.floor(Math.random()*3);
    let ranColor=btns[ranIdx];
    let ranBtn=document.querySelector(`.${ranColor}`);
    gameFlash(ranBtn);
    gameSeq.push(ranColor);
    
    
}
function checkAns(idx){
    
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
             maxScore=maxScore>level?maxScore:level;
        }
    }
    else{
       
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br></br> press any key to Start`;
        
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },150);
        reset();
    }
}


function userBtnFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}



function btnPress(){
    let btn=this;
    userBtnFlash(btn);
    userColor=btn.getAttribute('id');

    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let  allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}