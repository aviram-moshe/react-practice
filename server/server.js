const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const {pool} = require('./dbConnections');
app.use(express.json({ extended: false }));

app.route('/api/servers').get((req,res)=>{
    pool.query('select s.id,s.ip,s.name,s.server_date,s.status,cs.name company from servers as s left join companies_servers as cs on cs.id = s.Hosting_Company',(err,results,fields)=>{
        if(err) {
            res.status(500).json({success:false})
            throw err;
        }
        res.json({success:true,data:results})
    })
})

app.route('/api/server/status').post((req,res)=>{
    const {status,ID} = req.body
    if(isNaN(Number(ID)) || ![true,false].includes(status)){
        res.json({success:false})
        return
    }
    console.log(req.body);
    pool.query('update servers set status=? WHERE id=? ',[status,ID],(err,results,fields)=>{
if(err) throw err;
res.json({success: true})
    })
})

app.listen(port,()=>{console.log(`app is listening on port: ${port}`);})