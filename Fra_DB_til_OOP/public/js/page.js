
// I denne fil skal du benytte dig af de objekter, properties og funktioner, som du har defineret i "oop_gallery.js".
// Her er det tilladt at referere til specifikke gallerier, som f.eks. image_i01, image_02, osv.

document.addEventListener ("DOMContentLoaded", function (event) {
   
        fetch('http://localhost:3399/foto')
        .then ((Response) =>  {
            return Response.json ();
        })
        .then((data) => {
            let galleri = new OOPGallery();
            let galleri2 = new OOPGallery();
            data.forEach(function(element) {
                galleri.addImage(element.filnavn);
                galleri2.addImage(element.filnavn);
            })
            galleri.selectContainer("#gallery01")
            galleri2.selectContainer("#gallery02")  

             
        })
});
