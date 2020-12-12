

const ar=["Hey you are using Tushar's app",
"Hope you are enjoying this",
"Still there is scope of improvement",
"Go again!"];

const msg=document.getElementById('msg');
const typeWords=document.getElementById('mywords');
const btn=document.getElementById('mainbtn');
let startTime,endTime;

function playGame(){
let randomno=Math.floor(Math.random()*ar.length);
msg.innerText=ar[randomno];
let date=new Date();
startTime=date.getTime();
btn.innerText="Done";
}

function endGame(){
     let date=new Date();
     endTime=date.getTime();
     let total=((endTime-startTime)/1000);
     let totalStr=typeWords.value;
     let wordCount=wordCounter(totalStr);
     let speed=Math.round((wordCount/total)*60);
     let finalMsg="You typed at "+speed+" words per minutes ";
     finalMsg+=compareWords(msg.innerText,totalStr);
     msg.innerText=finalMsg;
}

const compareWords=(str1,str2) =>{
    let w1=str1.split(" ");
    let w2=str2.split(" ");
    let c=0;
    w1.forEach(function(item,index){
        if(item==w2[index])
        c++;
    })
    let erWrd=(w1.length-c);
    return (c+" correct out of "+ w1.length+" words and the total no of error are "+erWrd+".");
}
const wordCounter=(str)=>{
    let response=str.split(" ").length;
    return response;
}

btn.addEventListener('click',function(){
    if(this.innerText=='Start'){
        typeWords.disabled=false;
        playGame();
    }
    else if(this.innerText=="Done"){
        typeWords.disabled=true;
        endGame();
    }
})
