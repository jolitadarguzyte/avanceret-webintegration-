
// Denne fil må kun indeholde definitionen på gallery objektet.
// Altså må der ikke stå "new OOPGallery()" nogen steder i denne fil.

// Hvis en hjemmeside f.eks. har 3 gallerier på samme underside,
// så må de 3 gallerier IKKE nævnes specifikt her!

// Spørg, hvis du er i tvivl omkring reglerne.

class OOPGallery {
	// Deklarér properties og definér funktioner/metoder her.
	constructor() {
		this.foto = [];
		this.wrap = true;
		this.containerElement = null;
		this.imageElement = null;
		this.currentImgNumber = 0;
		this.spanElement = null;
		this.controlElementNext = null;
		this.controlElementFirst = null;
		this.imageKategori = null;

	}

	selectContainer(containerSelector) {
		this.containerElement = document.querySelector(containerSelector);
		this.imageElement = this.containerElement.querySelector(".oopgallery-image");
		this.spanElement = this.containerElement.querySelector(".oopgallery-image-number");
		this.controlElementNext = this.containerElement.querySelector(".oopgallery-control-next");
		this.controlElementPrevious = this.containerElement.querySelector(".oopgallery-control-previous");
		this.controlElementFirst = this.containerElement.querySelector(".oopgallery-control-first");
		this.controlElementLast = this.containerElement.querySelector(".oopgallery-control-last");
		//this.imageKategori = this.containerElement(".mySelect");



		this.addEventListner();
		this.updateImage();
	}

	addEventListner() {
		this.controlElementNext.addEventListener("click", (event) => {
			this.gotoImageNext()
		})
		this.controlElementPrevious.addEventListener("click", (event) => {
			this.gotoImagePrevious()
		})
		this.controlElementFirst.addEventListener("click", (event) => {
			this.gotoImageFirst()
		})
		this.controlElementLast.addEventListener("click", (event) => {
			this.gotoImageLast()
		})
		
	}



	gotoImageFirst() {

		this.currentImgNumber = 0;
		this.updateImage();
	}
	gotoImageLast() {
		this.currentImgNumber = this.foto.length - 1;
		this.updateImage();
	}
	gotoImagePrevious() {
		if (this.currentImgNumber > 0) {
			this.currentImgNumber--;
			this.updateImage();

		}
	}
	gotoImageNext() {
		if (this.currentImgNumber < this.foto.length - 1) {
			this.currentImgNumber++;
			this.updateImage();
		}

	}
	updateImage() {
		this.imageElement.src = "images/" + this.foto[this.currentImgNumber];
		this.spanElement.textContent = `${this.currentImgNumber + 1}/${this.foto.length}`
	}
	addImage(string) {
		this.foto.push(string)

	}
	addImages(array) {
		this.foto = this.foto.concat(array)
	}

	toggleWrapMode() {

	}
	setWrapMode(bool) {

	}
	toggleAutoMode() {

	}
	setAutoMode(bool) {

	}
}