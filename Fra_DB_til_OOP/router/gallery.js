
const db = require('../config/sql').connect();

module.exports = function (app) {
    app.get('/foto', function (req, res) {
        db.query(`select images.*, kategori.navn as kategori from images 
        inner join kategori on fk_kategori = kategori.id order by id
        `, function (err, data) {
                res.send(data);
                console.log("produkt er blevet sendt til klient")
            })
    });

    app.get("/", (req, res) => {
        res.render("pages/index")
        
        })


    app.get('/produkt/search/:search', function (req, res) {


        db.query(`
            SELECT
                produkter.*,
                kategorier.navn as kategori
            FROM produkter 
            INNER JOIN kategorier ON kategori = kategorier.id            
            WHERE produkter.navn LIKE '%${req.params.search}%'`,
            function (err, data) {
                if (err) {
                    console.log(err)
                }
                res.send(data);

            })
});
}





 