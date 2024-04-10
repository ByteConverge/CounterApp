let displayScreen = document.querySelector(".displayScreen");
let restartCountDisplay = document.querySelector(".restartCount");
let resetButton = document.querySelector(".reset");
let increaButton =  document.querySelector(".increment");
let decreaButton =  document.querySelector(".decrement");

let maxCount = document.querySelector(".maxCount");

restartCountDisplay.innerHTML = "";
restartCountDisplay.style.display = "none";

// maxCount.value = 100;

increaButton.addEventListener("click",function(){
    let range = +(maxCount.value);
    let currentValue = +(displayScreen.value)
    if(range === 0){
        range= 1000;
    }
    if(currentValue < range){
        displayScreen.value ++;
    }else{
        displayScreen.value  = "0";
    }

    if(currentValue === range - 1){
        restartCountDisplay.textContent++;
        restartCountDisplay.style.display = "grid";

        // document.body.style.background = "lightBlue";
        displayScreen.style.color = "red";
    }else{
        displayScreen.style.color = "black";
    // document.body.style.background = "white";
    }
   
 

} )

decreaButton.addEventListener("click" , function(){
    let range = +(maxCount.value);
    let currentValue = +(displayScreen.value)

    if(currentValue > 0){
        displayScreen.value --;
    }
  

})

resetButton.addEventListener("click" , function(){
    displayScreen.value ="0";
    restartCountDisplay.textContent = " ";
    restartCountDisplay.style.display = "none";
    maxCount.value = " ";
})

maxCount.addEventListener("keydown" , function(){
    displayScreen.value ="0";
    restartCountDisplay.textContent = " ";
    restartCountDisplay.style.display = "none";
    
} )




