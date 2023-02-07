const RPS=["rock","paper","scissors"];
const userchoice=prompt("choose rock,paper,scissors:");


 const randomNumber= Math.floor(Math.random()* RPS.length);
 const compchoice=RPS[randomNumber];


 if(compchoice==userchoice)
 {
  alert("equal result!")
 }else{
  if(compchoice=="rock"){
    if(userchoice=="paper"){
      alert("you win!")
    }
    if(userchoice=="scissors"){
      alert("you lost!")
    }
  }
  if(compchoice=="scissors"){
    if(userchoice=="paper"){
      alert("you lost")
    }
    if(userchoice=="rock"){
      alert("you win")
    }
  }
  if(compchoice=="paper"){
    if(userchoice=="rocl"){
      alert("you lost")
    }
    if(userchoice=="scissors"){
      alert("you win")
    }
  }
 }
    