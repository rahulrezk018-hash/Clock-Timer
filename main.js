let alram="";
let sEc = 0;
let timerId;
function  alramT() {
alram=document.getElementById("alarm").value;
console.log(alram);
}
function update(){
  let now=new Date();
  let current= now.toLocaleTimeString();
document.getElementById("timer").innerText=current;
if(current=== alram){
  alert("wake up");
  return;
}

}
setInterval(update,1000);
update();

function sec(){

timerId=setInterval(()=>{
  sEc ++;
  let now=Math.floor(sEc/60);
  let s=sEc%60;
  let final=`${now}:${s}`;
document.getElementById("second").innerText=final;
},1000);
}

function stop() {
  clearInterval(timerId);
}