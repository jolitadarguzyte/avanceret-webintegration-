
class spiller { 
    constructor(film, tid, pris) {
    this.Filmnavn = film;
    this.Tid = tid;
    this.Pris = pris;
    
    }
    Profil () {
        return `${this.Filmnavn} ${this.Tid} koster ${this.Pris}`
    }
    static hentSpillerListe() {
        let liste = [];
liste.push(new spiller("Titanic","15:00","90kr."));
liste.push(new spiller("The Mist","19:30", "110kr."));
liste.push(new spiller("Anabele","20:00", "100kr."));
return liste;
}}

let spillerliste = spiller.hentSpillerListe();
//hvis man vil gerne udskrive kun en bestemt forslag:

console.log(spillerliste[0].Profil());
console.log(spillerliste[2].Profil());

// hvis man vil gerne udskrive alle forslag
//spillerliste.forEach((element) => {
//console.log(element);
//});

