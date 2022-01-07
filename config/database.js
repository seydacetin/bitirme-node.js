import mysql from "mysql2";

const pool = mysql.createPool({
    host: '31.192.212.111',
    user: 'cenkkar1_web44',
    password: 'G5tZA{fe!dXF',
    database: 'cenkkar1_web.44'
});

const getConnection = function (callback) {
    pool.getConnection(function (err, connection) {
        callback(err, connection);
    });
};

export default getConnection;