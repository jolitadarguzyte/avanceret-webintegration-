
let spiller1 = new spiller();
//console.log(spiller1.profil()); // Bad - Sker for tidligt 

let element = document.querySelector('#profil');

element.addEventListener ("click",function (event) {
    //Bevis at knappen blev trykket
    console.log("har klikket på profil kanppen");
})
console.log(element);


//console.log(spiller1.Profil());
