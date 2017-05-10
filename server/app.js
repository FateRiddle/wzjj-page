const express = require('express')
// const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
// const routes = require('./routes')

const app = express()

// app.use(cors())
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname,'..','public')))


//config for react-router
app.get('/houtai/:anything',(req,res) => {
  res.sendFile(path.resolve(__dirname,'..','public','houtai','index.html'))
})

app.get('/html/:newsPath',(req,res) => {
  const { newsPath } = req.params
  if(newsPath.substring(0,5) === 'news-'){
    res.sendFile(path.resolve(__dirname,'..','public','html','hot_Consultant.html'))
  }
})

//get database
const mssql = require('./db')
const { db,sql } = mssql

app.get('/',(req,res) => {
  res.sendFile(path.resolve(__dirname,'..','public','html','index.html'))
})


//routes
app.post('/api/members', (req,res) => {
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
      values('${name}','${phone}','${city}','${area}',CONVERT(varchar,GETDATE(),101),'首页活动')
    `)
  })
  .then( result => {
    console.log(result)
    res.json(result)
  })
})

app.get('/api/news', (req, res) => {
  db.then(() => {
    return sql.query`select top 23 * from tb_wzjj_news order by createdAt`
  })
  .then(result => {
    res.json(result)
  })
  .catch(err => {console.error('sql error:',err)})
})

app.post('/api/news', (req, res) => {
  const { id,date,title,url,content } = req.body

  db.then(() => {
    const request = new sql.Request()
    return request
    .query(`
        if exists(select 1 from tb_wzjj_news where id='${id}')
        begin
          update tb_wzjj_news set
          date = '${date}',
          title = '${title}',
          url = '${url}',
          content = '${content}',
          modifiedAt = getdate()
          where id = '${id}'
        end
        else
        begin
          insert into tb_wzjj_news (id,date,title,url,content,createdAt)
          values ('${id}','${date}','${title}','${url}','${content}',getdate())
        end
      `)
  })
  .then( result => {
    res.json(result)
  })
  .catch(err => {console.error('sql error:',err)})
})

app.delete('/api/news/:id',(req,res) => {
  const { id } = req.params
  db.then(() => {
    const request = new sql.Request()
    return request
    .query(`
      delete from tb_wzjj_news where id='${id}'
    `)

  })
  .then( result => {
    res.json(result)
  })
  .catch(err => {console.error('sql error:',err)})
})

app.get('/api/members', (req, res) => {
  db.then(() => {
    return sql.query`select * from tb_wzjj_signup order by createdAt desc`
  })
  .then(result => {
    res.json(result)
  })
  .catch(err => {console.error('sql error:',err)})
})

app.post('/api/members/:id',(req,res) => {
  const { id } = req.params
  const { completed,memo } = req.query
  if(completed === 'toggle'){
    db.then(() => {
      const request = new sql.Request()
      return request
      .query(`
        declare @completed bit
        select @completed=completed from tb_wzjj_signup where id='${id}'
        if(@completed=0)
        update tb_wzjj_signup set completed=1 where id='${id}'
        else
        update tb_wzjj_signup set completed=0 where id='${id}'
      `)
    })
    .then( result => {
      res.json(result)
    })
    .catch(err => {console.error('sql error:',err)})
  }

  if(memo || memo === ''){
    db.then(() => {
      const request = new sql.Request()
      return request
      .query(`
        update tb_wzjj_signup set memo='${memo}' where id='${id}'
      `)
    })
    .then( result => {
      res.json(result)
    })
    .catch(err => {console.error('sql error:',err)})
  }
})

module.exports = app
