let computerguess;
let userguess=[];
//console.log(userguess);
console.log(sessionStorage.getItem('step'))
if(sessionStorage.getItem('welcome')=="" || sessionStorage.getItem('welcome')==null){
    // document.getElementById("welcome").style.display='block';
    // document.getElementById("naming").style.display='none';
    if(sessionStorage.getItem('diffic')=='' || sessionStorage.getItem('diffic')==null){
        document.getElementById("welcome").style.display='none';
        document.getElementById("naming").style.display='block';
        document.getElementById("gameArea").style.display='none';
        if(sessionStorage.getItem('game')=='' || sessionStorage.getItem('game')==null){
            document.getElementById("welcome").style.display='none';
            document.getElementById("naming").style.display='block';
            document.getElementById("gameArea").style.display='none'; 
        }else{
            document.getElementById("welcome").style.display='none';
            document.getElementById("naming").style.display='none';
            document.getElementById("gameArea").style.display='block';
        }
    }else {
         document.getElementById("welcome").style.display='block';
        document.getElementById("naming").style.display='none';
        document.getElementById("gameArea").style.display='none';
    }
}else{
    document.getElementById("welcome").style.display='none';
    document.getElementById("naming").style.display='block';

  
}

const init=(a)=>{
    a=Math.floor(Math.random()*100);
   // console.log(computerguess);
   //document.getElementById("newGameButton").style.display="none";
   //console.log(computerguess);
//    document.getElementById("gameArea").style.display="none";
   return a;
};


const startGame=()=>{
    document.getElementById("welcome").style.display="none";
    document.getElementById("gameArea").style.display="block";
}

const easyMode=()=>{
    maxGuess=10;
    sessionStorage.setItem('mode','10');
    sessionStorage.setItem('game','yes')
    sessionStorage.removeItem('diffic')
   
startGame();
}

const hardMode=()=>{
    maxGuess=5;
    sessionStorage.setItem('mode','5');
    sessionStorage.setItem('game','yes')
    sessionStorage.removeItem('diffic')
    startGame();
    }



const compareguess=()=>{
    var a;
console.log(init(a))
    const userNumber=Number(document.getElementById("inputbox").value);
    userguess=[...userguess,userNumber];
//console.log(userguess);
document.getElementById("guesses").innerHTML=userguess;


console.log(userguess);//check the value low or high.................

for(var i=0;i<=userguess.length;i++){
    document.getElementById("attempts").innerHTML=userguess.length;
    if(userguess[i]>init(a)){
        document.getElementById("textoutput").innerText="your guess is high";
        document.getElementById("inputbox").value="empty";
    }else if(userguess[i]<init(a)){
        document.getElementById("textoutput").innerText="your guess is low";
        document.getElementById("inputbox").value="empty";
    
    }else{
        return;
    }
}

var mode=sessionStorage.getItem("mode");
if(userguess.length>=10 && mode==10){
document.getElementById("inputbox").style.display="none";
}else if(userguess.length==5 && mode ==5){
    document.getElementById("inputbox").style.display="none";
}else{
   return;
}

/*if(userNumber>10)
{
document.getElementById("inputbox").value="empty";
}*/
};


const Continue=()=>{
//var name=document.getElementById("name");
//var age=document.getElementById("age");
document.getElementById("naming").style.display="none";
document.getElementById("welcome").style.display="block";
/*sessionStorage.setItem("name",name);
sessionStorage.setItem("age",age);
document.getElementById("print").innerHTML=name;

}

document.getElementById("print").innerHTML=sessionStorage.getItem()
*/
const piyush=document.getElementById("name").value;
document.getElementById("print").innerText=piyush;
sessionStorage.setItem("name",piyush);

sessionStorage.setItem('diffic','yes');
}

const piyush=sessionStorage.getItem('name');
document.getElementById("print").innerText=piyush;

function newgame(){
    sessionStorage.clear();
    window.location.reload();
}