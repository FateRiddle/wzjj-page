const express = require('express')
// const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const routes = require('./routes')

const app = express()

// app.use(cors())
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname,'..','public')))

// const sql = require('mssql');
// const db = sql.connect("mssql://youcb:DJit9379@youcaibao.sqlserver.rds.aliyuncs.com:3433/youcb_prd")

const mssql = require('./db')
const { db,sql } = mssql

app.put('/api/zhuangxiuApply', (req,res) => {
  console.log(req.body)
  const { name,phone,city,area } = req.body
  db.then(() => {
    const request = new sql.Request()
    return request
    .output('msg',sql.VarChar(100))
    .output('ok',sql.Bit)
    .query(`
      set @msg = ''
      set @ok = 1
      if exists (select 1 from tb_wzjj_signup where name = '${name}' and phone = '${phone}')
      begin
        set @msg = '请勿重复预约。'
        set @ok = 0
        return
      end
      insert into tb_wzjj_signup
      (name,phone,city,area,createdAt,huodong)
      values('${name}','${phone}','${city}','${area}',getdate(),'首页活动')
    `)
  })
  .then( result => {
    console.log(result)
    res.json(result)
  })
  // res.json({ok:true,msg:'haha'})
})

app.get('/',(req,res) => {
  res.sendFile(path.resolve(__dirname,'..','public','html','index.html'))
})

module.exports = app
