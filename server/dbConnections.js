const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost", // 127.0.0.1
    user: 'jbh_user',
    // port:3306,
    password: '123456',
    database: `react_nodejs_test`
});

pool.on('connection',(con)=>{
    console.log(`New Connection ID: `,con.threadId);
})

pool.on('aquire',(con)=>{
    console.log(`Aquire Connection ID: `,con.threadId);
})

pool.on('enqueue',(con)=>{
    console.log(`Waiting for avilable connetcion slot`);
})

pool.on('release',(con)=>{
    console.log(`Connection ${con.threadId} relesed`);
})
// pool.query()

module.exports = {pool}