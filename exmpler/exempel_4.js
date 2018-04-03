
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

spiller_1 = new spiller("Palle","Olsen");
spiller_2 = new spiller("Tina","Jensen");
console.log(spiller_1.Profil());
console.log(spiller_2.Profil());