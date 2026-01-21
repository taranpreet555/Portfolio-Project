let boxes = document.querySelectorAll(".box")
let rst_btn = document.querySelector("#rst")
let neww = document.querySelector("#new")
let msgs = document.querySelector(".msg")
let paragraph = document.querySelector("#win")
let playerO = true 
const winnerpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const reset = () =>{
    enableboxes();
    playerO = true;
    msgs.classList.add("hide")
}
boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
    if(playerO){
        box.innerText="O"
        playerO = false
        }
    else{
        box.innerText = "X"
        playerO = true
    }
    box.disabled = true;
    checkwinner();
}) 
})

const disableboxes = () =>{
   for(  let box of boxes){
        box.disabled = true;

    }
}
const enableboxes = () =>{
   for(  let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showwinner = (winner) =>{
    msgs.innerText = "Congratulations! Winner is " +winner;
    msgs.classList.remove("hide");
     disableboxes();

}
 const checkwinner = () => {
    for (let pattern of winnerpattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
             showwinner(pos1);
            
            }
        }
    }

}

neww.addEventListener("click", reset);
rst_btn.addEventListener("click",reset);

