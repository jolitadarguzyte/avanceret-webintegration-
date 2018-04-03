
let spiller = function (fornavn, efternavn) {
    this.Fornavn = fornavn;
    this.Efternavn = efternavn;
    this.Aktiv = false;
    this.Point = 0;
    this.SkiftAktiv = function () {
        this.Aktiv = this.Aktiv;
    }
    this.GivPoint = function (antal) {
        this.Point += antal;
    }
    this.Profil = function () {
        return `${this.Fornavn} ${this.Efternavn} har ${this.Point} 
        point ${this.aktiv ? "(aktiv)": "(ikke aktiv)"}`
    }
}
let spiller_1 = new spiller("Palle","Olsen");
let spiller_2 = new spiller("Tina","Jensen");
console.log(spiller_1.Profil());
console.log(spiller_2.Profil());