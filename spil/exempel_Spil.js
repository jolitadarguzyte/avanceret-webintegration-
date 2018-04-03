
class spiller { 
    constructor(navn) {
    this.Name = navn;
    this.Point = 0;
}
GivPoint (antal) {
    this.Point += antal;
}
static Player (){
    let Players = []
    Players.push (new spiller("Markas"));
    Players.push (new spiller("Jolita"));
    return Players;
}
}

let PlayersList = spiller.Player ();
document.addEventListener("DOMContentLoaded",() => {
for (let i = 1; i <= 10; i++){
    let button = document.createElement ("button")
    button.textContent = i;
    document.body.appendChild (button);
    button.style.backgroundColor = "red";
}
let div = document.createElement ("div")
document.body.appendChild (div);
div.setAttribute ("id","box")
div.style.backgroundColor ="blue";
Update();
})

function Update () { 
let box = document.querySelector('#box');
let text = "";
PlayersList.forEach(element => {
    text += "Name" + element.Name + "score" +element.Point + "<br>"

});
box.innerHTML = text;
}
