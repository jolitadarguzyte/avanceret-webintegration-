
class spiller { 
    constructor(fornavn, efternavn) {
    this.Fornavn = fornavn;
    this.Efternavn = efternavn;
    this.Aktiv = false;
    this.Point = 0;
    }
    SkiftAktiv  () {
        this.Aktiv = this.Aktiv;
    }
    GivPoint  (antal) {
        this.Point += antal;
    }
    Profil () {
        return `${this.Fornavn} ${this.Efternavn} har ${this.Point} 
        point ${this.aktiv ? "(aktiv)": "(ikke aktiv)"}`
    }
}
let spillerliste = [];
spillerliste.push(new spiller("Palle","Olsen"));
spillerliste.push(new spiller("Tina","Jensen"));

spillerliste.forEach((element) => {
    element.GivPoint(10);
console.log(element);
});
