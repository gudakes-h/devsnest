for(let i=1; i<=36; i++){
    var newEl=document.createElement("div");
    document.getElementById("grid").appendChild(newEl);
}
let remaining=36;
let gone=0;
let buttons=document.querySelectorAll(".grid > div");
let stats=document.querySelectorAll("span");
console.log(stats);

for(let i=0; i<36; i++){
    buttons[i].addEventListener("click", (e)=>{
        if(buttons[i].classList.length){
            remaining++;
            gone--;
            stats[0].innerHTML=gone;
            stats[1].innerHTML=remaining;
        }else{
            remaining--;
            gone++;
            stats[0].innerHTML=gone;
            stats[1].innerHTML=remaining;
        }
        buttons[i].classList.toggle("active");
    })
}
