
const mysql = require('mysql2');

module.exports = {
    'connect': () => {
        return mysql.createConnection ( {
            'host': 'localhost',
            'user': 'root',
            'password': 'root',
            'database': 'gallery',
            'port':'8889'
        });
    }
};