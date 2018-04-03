


class spiller { 
    constructor(efter) {
    this.Fornavn = "";
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
    static hentSpillerListe() {
        let liste = [];
liste.push(new spiller("Palle","Olsen"));
liste.push(new spiller("Tina","Jensen"));
liste.push(new spiller("Sam","Andersen"));
return liste;
}}


